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

// export default function MapBox({
//   cityName,
//   offersOfCity,
//   hoveredOfferId,
//   mapClass,
// }: MapProps): JSX.Element {
//   const currentCity = CITIES.find((city) => city.name === cityName) || CITIES[0];
//   const mapRef = useRef(null);
//   const map = useMap({mapRef, currentCity});
//   useEffect(() => {
//     if (map) {
//       const mapLayerGroup = layerGroup().addTo(map);
//
//       // Проверка на пустой массив offersOfCity
//       if (offersOfCity && offersOfCity.length === 0) {
//         return () => {
//           map.removeLayer(mapLayerGroup);
//         };
//       }
//       if (offersOfCity) {
//         offersOfCity.forEach((offer) => {
//           const marker = new Marker({
//             lat: offer.location.latitude,
//             lng: offer.location.longitude,
//           });
//           marker.setIcon(
//             hoveredOfferId !== undefined && hoveredOfferId === offer.id
//               ? currentCustomIcon
//               : defaultCustomIcon
//           )
//             .addTo(mapLayerGroup);
//         });
//       }
//       return () => {
//         map.removeLayer(mapLayerGroup);
//       };
//     }
//   }, [map, offersOfCity, hoveredOfferId]);
//   return (
//     <section className={clsx('map', style['map-box'], mapClass)} ref={mapRef}></section>
//   );
// }

export default function MapBox({
  cityName,
  offersOfCity,
  hoveredOfferId,
  mapClass,
}: MapProps): JSX.Element {
  const currentCity = CITIES.find((city) => city.name === cityName) || CITIES[0];
  const mapRef = useRef(null);
  const map = useMap({mapRef, currentCity});

  // Создаем ссылку для хранения слоя с маркерами, чтобы иметь к нему доступ между рендерами
  const markerLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (map) {
      // Если слой уже был, удаляем его перед созданием нового (при смене города/офферов)
      if (markerLayerRef.current) {
        map.removeLayer(markerLayerRef.current);
      }

      // Создаем новую группу
      const markerLayer = layerGroup().addTo(map);
      markerLayerRef.current = markerLayer;

      if (offersOfCity) {
        offersOfCity.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });

          marker
            .setIcon(
              offer.id === hoveredOfferId
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);
        });
      }

      return () => {
        if (markerLayerRef.current) {
          map.removeLayer(markerLayerRef.current);
        }
      };
    }
    // УБИРАЕМ hoveredOfferId из зависимостей этого эффекта!
    // Теперь маркеры перерисовываются только если сменилась карта или массив офферов.
  }, [map, offersOfCity]);

  // ОТДЕЛЬНЫЙ эффект для обновления иконок без перерисовки всей карты
  useEffect(() => {
    if (markerLayerRef.current) {
      markerLayerRef.current.getLayers().forEach((layer) => {
        if (layer instanceof Marker) {
          const marker = layer;
          const {lat, lng} = marker.getLatLng();

          // Находим оффер, соответствующий этому маркеру
          const currentOffer = offersOfCity?.find(
            (offer) => offer.location.latitude === lat && offer.location.longitude === lng
          );

          if (currentOffer) {
            marker.setIcon(
              currentOffer.id === hoveredOfferId
                ? currentCustomIcon
                : defaultCustomIcon
            );
          }
        }
      });
    }
  }, [hoveredOfferId, offersOfCity]);

  return (
    <section className={clsx('map', style['map-box'], mapClass)} ref={mapRef}></section>
  );
}

