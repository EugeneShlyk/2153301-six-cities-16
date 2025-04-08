import useMap from '../../hooks/use-map';
import {useRef, useEffect} from 'react';
import {City} from '@customType/city.ts';

interface MapProps {
  currentCity: City;
}

export default function Map({currentCity}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  useEffect(() => {
    if (map) {

    }
  });
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
