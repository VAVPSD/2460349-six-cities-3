import clsx from 'clsx';
import { OfferDto } from '../../types/types';
import { Link } from 'react-router-dom';
import { RATING_MULTIPLIER } from '../../const';

interface Props {
  offer: OfferDto;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function OfferCard({ offer, onMouseEnter, onMouseLeave }: Props) {
  const { id, title, type, price, isFavorite, isPremium, rating, previewImage } = offer;
  return (
    <article
      className="cities__card place-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={clsx(
              'place-card__bookmark-button',
              'button',
              { 'place-card__bookmark-button--active': isFavorite }
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * RATING_MULTIPLIER}% ` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}

export default OfferCard;
