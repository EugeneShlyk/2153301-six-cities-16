import useMap from '../../hooks/use-map';
import {useRef, useEffect} from 'react';
import {City} from '@customType/city.ts';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '@constants';
import {Icon, Marker, layerGroup} from 'leaflet';

interface MapProps {
  currentCity: City;
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

export default function Map({currentCity}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  useEffect(() => {
    if (map) {
      // const pointerLayer =
    }
  });
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
