import Header from '@components/header';
import FavoriteButton from '../../components/favorite-button';
import {largeButtonFavoriteDimensions, mapClasses} from '@constants';
import {REVIEWS} from '@mocks/reviews.ts';
import ReviewList from '@components/review-list';
import {OfferPageProps} from '@customType/props.ts';
import MapBox from '@components/map-box';
import OfferCard from '@components/offer-card';
import {OfferPreview} from '@customType/offer.ts';
import CommentForm from '@components/comment-form';
import {Offer} from '@customType/offer.ts';
import {getRatingWidth} from '@utils/get-rating-width.ts';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '@constants';

function OfferPage({reviews, currentCity, closestOffers, FullOffers}: OfferPageProps): JSX.Element {
  const {offerId} = useParams();
  const countReview: number = reviews.length;
  const selectedOffer: Offer | undefined = FullOffers.find((offer) => offer.id === offerId);
  if (!selectedOffer) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {selectedOffer && selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedOffer && selectedOffer.title}
                </h1>
                <FavoriteButton
                  dimension={largeButtonFavoriteDimensions}
                  isOfferPageBookmark
                  isFavorite={selectedOffer?.isFavorite ?? false}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: (getRatingWidth(selectedOffer?.rating))}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{selectedOffer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {selectedOffer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {selectedOffer?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer?.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedOffer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {selectedOffer?.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar" src={selectedOffer?.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {selectedOffer?.host.name}
                  </span>
                  <span className="offer__user-status">
                    {(selectedOffer?.host.isPro) && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                    building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where
                    the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countReview}</span>
                </h2>
                <ReviewList reviews={REVIEWS}></ReviewList>
                <CommentForm/>
              </section>
            </div>
          </div>
          <MapBox currentCity={currentCity} offersOfCity={closestOffers} mapClass={mapClasses.offerPage}></MapBox>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {closestOffers.map((dataCard: OfferPreview) => (
                <OfferCard
                  offer={dataCard}
                  variant="cities"
                  size="large"
                  key={dataCard.id}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
