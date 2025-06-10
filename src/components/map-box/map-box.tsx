import useMap from '../../hooks/use-map';
import {useRef, useEffect} from 'react';
import {City} from '@customType/city.ts';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '@constants';
import {Icon, Marker, layerGroup} from 'leaflet';
import {OfferPreview} from '@customType/offer.ts';
import clsx from 'clsx';
import style from './map-box.module.scss';

interface MapProps {
  currentCity: City;
  offersOfCity?: OfferPreview[];
  hoveredOfferId?: string | null;
  mapClass: string;
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

export default function MapBox({
  currentCity,
  offersOfCity,
  hoveredOfferId,
  mapClass,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
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
