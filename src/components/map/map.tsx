import {useEffect, useRef} from 'react';
// import {useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapSite() {
  const mapRef = useRef<HTMLDivElement>(null);
  // const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: 40.835292,
          lng: -73.916236
        },
        zoom: 10
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      // setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef]);

  return (
    <div className="cities__right-section" ref={mapRef}>
      <section className="cities__map map"></section>
    </div>
  );
}
