import React, {PureComponent} from "react";

const withReviewsForm = (Component) => {
  return class ReviewsForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleDataChange = this._handleDataChange.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleDataChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {rating, review} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          review={review}
          onSubmit={this._handleSubmit}
          onChange={this._handleDataChange}
        />
      );
    }
  };
};

export default withReviewsForm;
