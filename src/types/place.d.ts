export type TPlaces = TPlace[];

interface TPlace {
  id: number;
  title: string;
  icon: string;
  description: string;
  banner: string;
  latitude: number;
  longitude: number;
  npc: Array;
}
