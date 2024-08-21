import { MapContainer, ImageOverlay, Marker } from "react-leaflet";
import L, { type LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, type FC } from "react";
import { type TPlace } from "@/types/place";
import Popup from "./Popup";

import "@/scss/style.scss";

interface IMapProps {
  places: TPlace[];
}

const bounds: LatLngBoundsExpression = [
  [0, 0],
  [720, 1097],
]; // Ajuste les dimensions selon ta carte

const Map: FC<IMapProps> = ({ places }) => {
  const [selectedPlace, setSelectedPlace] = useState<TPlace | null>(null);

  return (
    <>
      <MapContainer
        center={[360, 548.5]} // Centre initial de la carte
        zoom={0}
        style={{ height: "100vh", width: "100%", backgroundColor: "#e5e5da" }}
        crs={L.CRS.Simple} // Système de coordonnées simple pour les images
        attributionControl={false}
        maxBounds={bounds} // Empêche la carte de sortir des limites de l'image
        maxBoundsViscosity={1.0} // Rend les limites "collantes", empêchant les utilisateurs de glisser hors de l'image
        minZoom={1} // Ajuster en fonction de la taille de l'image pour éviter de voir les bordures
        maxZoom={2} // Limite le zoom pour éviter d'aller trop loin
      >
        <ImageOverlay url='./images/ville_du_crépuscule.svg' bounds={bounds} />
        {places.map((place: TPlace) => (
          <Marker
            key={place.id}
            position={[place.latitude, place.longitude]}
            icon={
              new L.Icon({
                iconUrl: `./images/icons/marker_${place.icon}.svg`,
                iconSize: [60, 60], // Ajuste la taille de l'icône
              })
            }
            eventHandlers={{
              click: () => {
                setSelectedPlace(place);
              },
            }}
          ></Marker>
        ))}
      </MapContainer>
      {selectedPlace && (
        <Popup place={selectedPlace} onClose={() => setSelectedPlace(null)} />
      )}
    </>
  );
};

export default Map;
