import { MapContainer, ImageOverlay, Marker, Popup } from "react-leaflet";
import L, { type LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { type FC } from "react";

interface Place {
  id: number;
  title: string;
  icon: string;
  description: string;
  latitude: number;
  longitude: number;
}

interface MapProps {
  places: Place[];
}

const bounds: LatLngBoundsExpression = [
  [0, 0],
  [720, 1097],
]; // Ajuste les dimensions selon ta carte

const Map: FC<MapProps> = ({ places }) => {
  return (
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
      <ImageOverlay url='./images/ville_du_crépuscule.jpg' bounds={bounds} />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.latitude, place.longitude]}
          icon={
            new L.Icon({
              iconUrl: `./images/icons/sign_${place.icon}.svg`,
              iconSize: [72, 72], // Ajuste la taille de l'icône
              popupAnchor: [0, -32], // Position du popup par rapport au marqueur
            })
          } // Appliquer l'icône personnalisée
        >
          <Popup>
            <h3>{place.title}</h3>
            <p>{place.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
