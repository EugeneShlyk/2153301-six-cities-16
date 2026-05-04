import useMap from './use-map';
import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {CITIES, CitiesName} from '@constants';
import {Icon, Marker, layerGroup} from 'leaflet';
import {OfferPreview} from '@customType/offer.ts';
import clsx from 'clsx';
import style from './map-box.module.scss';
import Pin from './assets/pin.svg';
import PinCurrent from './assets/pin-current.svg';

interface MapProps {
  cityName: CitiesName;
  offersOfCity?: OfferPreview[];
  hoveredOfferId?: string | null;
  mapClass: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: Pin as string,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: PinCurrent as string,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

export default function MapBox({
  cityName,
  offersOfCity,
  hoveredOfferId,
  mapClass,
}: MapProps): JSX.Element {
  const currentCity = CITIES.find((city) => city.name === cityName) || CITIES[0];
  const mapRef = useRef(null);
  const map = useMap({mapRef, currentCity});
  useEffect(() => {
    if (map) {
      const mapLayerGroup = layerGroup().addTo(map);

      // Проверка на пустой массив offersOfCity
      if (offersOfCity && offersOfCity.length === 0) {
        return () => {
          map.removeLayer(mapLayerGroup);
        };
      }
      if (offersOfCity) {
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
      return () => {
        map.removeLayer(mapLayerGroup);
      };
    }
  }, [map, offersOfCity, hoveredOfferId]);
  return (
    <section className={clsx('map', style['map-box'], mapClass)} ref={mapRef}></section>
  );
}
