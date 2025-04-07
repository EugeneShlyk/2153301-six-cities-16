import useMap from '../../hooks/use-map';
import {useRef, useEffect} from 'react';
import {CitiesName} from '@constants';

const paris = {name: CitiesName.Paris, location: {latitude: 48.8566, longitude: 2.3522, zoom: 10}};

export default function Map(currentCity) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);
  // useEffect(() => {
  //   if (map) {
  //
  //   }
  // });
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
