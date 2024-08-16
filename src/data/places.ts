interface Place {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
}

const places: Place[] = [
  {
    id: 1,
    title: "Taverne du Dragon",
    description:
      "La taverne la plus célèbre de la ville, où les aventuriers se retrouvent.",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    id: 2,
    title: "Marché Noir",
    description:
      "Un marché souterrain où tout peut être acheté pour le bon prix.",
    latitude: 48.8576,
    longitude: 2.3422,
  },
  // Ajoute d'autres lieux ici
];

export default places;
