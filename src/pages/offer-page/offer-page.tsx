import Header from '@components/header';
import FavoriteButton from '../../components/favorite-button';
import {mapClasses, galleryPhoto, RequestStatus} from '@constants';
import {REVIEWS} from '@mocks/reviews.ts';
import MapBox from '@components/map-box';
import OfferCard from '@components/offer-card';
import {OfferPreview} from '@customType/offer.ts';
import {getRatingWidth} from '@utils/get-rating-width.ts';
import {Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '@constants';
import {getNumbersBedrooms, getNumbersAdults} from '@utils/utils.tsx';
import {JSX, useEffect} from 'react';
import Reviews from '@components/reviews';
import PremiumBadge from '@components/premium-badge';
import OfferList from '@components/offer-list';
import Gallery from '@components/gallery';
import OfferOptions from '@components/offer-options/offer-options.tsx';
import OfferHost from '@components/offer-host/offer-host.tsx';
import {useActionCreators} from '@store/hooks/use-action-creator.ts';
import {offerSelector, offerAction} from '@slices/offer';
import {useAppSelector} from '@store/hooks/use-app-selector.ts';
import {offersSelector} from '@slices/offers';
import Spinner from '@components/spinner';

function OfferPage(): JSX.Element {
  const {fetchOffer, fetchNearbyOffers, clearOffer} = useActionCreators(offerAction);
  const {offerId} = useParams();
  useEffect(() => {
    if (offerId) {
      fetchOffer(offerId);
      fetchNearbyOffers(offerId);
    }
    return () => {
      clearOffer();
    };
  }, [fetchOffer, fetchNearbyOffers, offerId]);
  const offer = useAppSelector(offerSelector.offer);
  const nearbyOffers = useAppSelector(offerSelector.nearbyOffers).slice(0, 3);
  const offerStatus = useAppSelector(offerSelector.offerStatus);
  const cityName = useAppSelector(offersSelector.city);

  if (offerStatus === RequestStatus.Loading || offerStatus === RequestStatus.Idle || !offer) {
    return <Spinner/>;
  }
  if (offerStatus === RequestStatus.Failed) {
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
              <PremiumBadge isPremium={offer.isPremium} extraClassName={'offer__mark'}/>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer && offer.title}
                </h1>
                <FavoriteButton
                  offerId={offer.id}
                  size="large"
                  bemBlock="offer"
                  isFavorite={offer?.isFavorite ?? false}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: (getRatingWidth(offer?.rating))}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {getNumbersBedrooms(offer?.bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {getNumbersAdults(offer?.maxAdults)}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferOptions offer={offer}/>
              </div>
              <OfferHost offer={offer}/>
              <Reviews reviews={REVIEWS}/>
            </div>
          </div>
          <MapBox cityName={cityName} offersOfCity={nearbyOffers} mapClass={mapClasses.offerPage}></MapBox>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList
              dataOffers={nearbyOffers}
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
