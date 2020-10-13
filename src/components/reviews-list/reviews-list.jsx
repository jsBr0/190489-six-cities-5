import React from "react";
import PropTypes from "prop-types";

import ReviewItem from "../review-item/review-item";

import {OfferPropTypes, ReviewPropTypes} from "../../utils/prop-types";

const ReviewsList = (props) => {
  const {reviews, offer} = props;
  const filteredReviews = reviews.filter((review) => review.forOfferId === offer.id
  );

  return (
    <React.Fragment>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{filteredReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {filteredReviews.map((filteredReview) => (
          <ReviewItem key={filteredReview.id} review={filteredReview} />
        ))}
      </ul>
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  offer: OfferPropTypes,
};

export default ReviewsList;
