import useMap from '../../hooks/use-map';
import {useRef, useEffect} from 'react';
import {City} from '@customType/city.ts';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '@constants';
import {Icon, Marker, layerGroup} from 'leaflet';
import {OfferPreview} from '@customType/offer.ts';

interface MapProps {
  currentCity: City;
  offersOfCity: OfferPreview[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const hoveredOfferId = 'f641a4cd-06b9-4a1d-8957-3e19fcad7948';

export default function Map({currentCity, offersOfCity}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  useEffect(() => {
    if (map) {
      const mapLayerGroup = layerGroup().addTo(map);
      offersOfCity.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(
          hoveredOfferId !== undefined && hoveredOfferId === offer.id
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(mapLayerGroup);
      });
    }
  });
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
