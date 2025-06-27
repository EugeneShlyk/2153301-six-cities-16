import {RefObject, useEffect, useRef} from 'react';
import {useState} from 'react';
import L, {Map, TileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CITIES} from '@constants';

type CityItem = typeof CITIES[number];

type TUseMapProps = {
  currentCity: CityItem;
  mapRef: RefObject<HTMLDivElement>;
};

export default function useMap({mapRef, currentCity}: TUseMapProps
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentCity.location.latitude,
          lng: currentCity.location.longitude,
        },
        zoom: currentCity.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else if (map) {
      map.panTo(new L.LatLng(currentCity.location.latitude, currentCity.location.longitude));
    }
  }, [mapRef, currentCity, map]);

  return map;
}
