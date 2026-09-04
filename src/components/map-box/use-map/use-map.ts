import {RefObject, useEffect, useRef} from 'react';
import {useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CITIES} from '@constants';

type CityItem = typeof CITIES[number];

type UseMapProps = {
  currentCity: CityItem;
  mapRef: RefObject<HTMLDivElement>;
};

export default function useMap({mapRef, currentCity}: UseMapProps
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  // Создаем карту
  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const ourMap = new Map(mapRef.current, {
        center: {
          lat: currentCity.location.latitude,
          lng: currentCity.location.longitude,
        },
        zoom: currentCity.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors &copy; <a href="https://carto.com">CARTO</a>'
        }
      );
      ourMap.addLayer(layer);
      setMap(ourMap);
      isRenderedRef.current = true;
    }
  }, [mapRef, currentCity.location.latitude, currentCity.location.longitude, currentCity.location.zoom]);

  // двигаем камеру, когда меняется город
  useEffect(() => {
    if (map && currentCity) {
      map.setView(
        [currentCity.location.latitude, currentCity.location.longitude],
        currentCity.location.zoom
      );
    }
  }, [map, currentCity,]); // Срабатывает, когда карта уже готова или город сменился

  return map;
}
