import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleTextareaChange = this._handleTextareaChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  }

  _handleRatingChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  _handleTextareaChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }
  render() {
    const RATING_TITLES = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {Array.from({length: 5}).map((_, index) => (
            <React.Fragment key = {index}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={5 - index}
                id={5 - index + `-stars`}
                type="radio"
                onChange={this._handleRatingChange}
                checked={index === this.state.rating}
              />
              <label
                htmlFor={5 - index + `-stars`}
                className="reviews__rating-label form__rating-label"
                title={RATING_TITLES[index]}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this._handleTextareaChange}
          value={this.state.review}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{` `}
            <span className="reviews__star">rating</span> and describe your stay
            with at least{` `}
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled=""
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func,
};
