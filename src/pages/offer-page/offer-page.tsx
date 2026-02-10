import Header from '@components/header';
import FavoriteButton from '../../components/favorite-button';
import {CitiesName, mapClasses, galleryPhoto} from '@constants';
import {REVIEWS} from '@mocks/reviews.ts';
import {OfferPageProps} from '@customType/props.ts';
import MapBox from '@components/map-box';
import OfferCard from '@components/offer-card';
import {OfferPreview} from '@customType/offer.ts';
import {Offer} from '@customType/offer.ts';
import {getRatingWidth} from '@utils/get-rating-width.ts';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '@constants';
import {getNumbersBedrooms, getNumbersAdults} from '@utils/utils.tsx';
import {JSX} from 'react';
import Reviews from '@components/reviews';
import PremiumBadge from '@components/premium-badge';
import OfferList from '@components/offer-list';
import Gallery from '@components/gallery';
import OfferOptions from '@components/offer-options/offer-options.tsx';
import OfferHost from '@components/offer-host/offer-host.tsx';

function OfferPage({closestOffers, fullOffers}: OfferPageProps): JSX.Element {
  const {offerId} = useParams();
  console.log(offerId);
  console.log(fullOffers);
  const selectedOffer: Offer | undefined = fullOffers.find((offer) => offer.id === offerId);
  console.log(selectedOffer);
  const cityName = CitiesName.Paris;
  if (!selectedOffer) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={galleryPhoto}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumBadge isPremium={selectedOffer.isPremium} extraClassName={'offer__mark'}/>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedOffer && selectedOffer.title}
                </h1>
                <FavoriteButton
                  offerId={selectedOffer.id}
                  size='large'
                  bemBlock="offer"
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
                  {getNumbersBedrooms(selectedOffer?.bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {getNumbersAdults(selectedOffer?.maxAdults)}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedOffer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferOptions offer={selectedOffer}/>
              </div>
              <OfferHost offer={selectedOffer}/>
              <Reviews reviews={REVIEWS}/>
            </div>
          </div>
          <MapBox cityName={cityName} offersOfCity={closestOffers} mapClass={mapClasses.offerPage}></MapBox>;
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList
              dataOffers={closestOffers}
              extraClass="near-places__list"
            >
              {(dataCard: OfferPreview) => (
                <OfferCard
                  offer={dataCard}
                  variant="near-places"
                  size="large"
                  key={dataCard.id}
                />
              )}
            </OfferList>
          </section>
        </div>
        ;
      </main>
    </div>
  );
}

export default OfferPage;
