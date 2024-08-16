import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

interface Place {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
}

interface MapProps {
  places: Place[];
}

const Map: React.FC<MapProps> = ({ places }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return; // Initialisation unique de la carte
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [2.3522, 48.8566], // Coordonnées initiales de Paris par exemple
      zoom: 12
    });

    places.forEach(place => {
      new mapboxgl.Marker()
        .setLngLat([place.longitude, place.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${place.title}</h3><p>${place.description}</p>`))
        .addTo(map.current!);
    });
  }, [places]);

  return <div ref={mapContainer} className="w-full h-96" />;
};

export default Map;
