import PropTypes from "prop-types";

export const OfferPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bedroomsNum: PropTypes.number.isRequired,
  guestsMaxNum: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  facilities: PropTypes.array.isRequired,
  photos: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  })
}).isRequired;

export const ReviewPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  forOfferId: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}).isRequired;
