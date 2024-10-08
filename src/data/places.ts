import { type TPlaces } from "@/types/place";

const places: TPlaces = [
  {
    id: 1,
    title: "Le Mousse Gelé",
    icon: "tavern",
    description:
      "Le Mousse Gelé est une auberge chaleureuse, réputée pour ses boissons qui réchauffe le coeur des ouvriers et des marins. C'est l'endroit idéal pour se détendre après une longue journée d'aventures.",
    banner: "mousse_gele",
    latitude: 615,
    longitude: 502,
    npc: [],
  },
  {
    id: 2,
    title: "L'enclume chantante",
    icon: "tavern",
    description:
      "L'enclume chantante est une taverne animée et bruyante. On peut y entendre les échos des marteaux des forgerons accompagnés par la musique traditionnelle des artistes. Un lieu majoritairement fréquenté par les artisans du quartiers.",
    banner: "enclume_chantante",
    latitude: 565,
    longitude: 210,
    npc: [],
  },
  {
    id: 3,
    title: "Le refuge",
    icon: "tavern",
    description:
      "Le refuge est une auberge peu accueillante. Nichée dans la fosse, elle est principalement fréquenté par les rebus de la société, ceux qui vivent dans l'ombre et dans la boue, c'est ici que les pires scélérats se rassemblent.",
    banner: "refuge",
    latitude: 449,
    longitude: 578,
    npc: [],
  },
  {
    id: 4,
    title: "La porte du Givre",
    icon: "mountain",
    description:
      "La porte du Givre est une majestueuse porte logée au pied de la montagne. Elle marque la limite entre les terres vivables et celles qui sont bien trop hostile pour l'être. Mais nul ne sait ce qui se trouve réellement derrière, la demeure du souverain c'est certain, mais elle cache forcément d'autres secrets...",
    banner: "porte_givre",
    latitude: 75,
    longitude: 606,
    npc: [],
  },
  {
    id: 5,
    title: "Milice des Griffes Hivernales",
    icon: "barracks",
    description:
      "Les Griffes Hivernales sont l'élite de l'armée, chargées de faire respecter l'ordre au sein de la ville, ce sont elles qui possèdent le plus de pouvoir dans cette ville portuaire. Son quartier général est un lieu stratégique, toujours en effervescence, mais inaccessible pour ceux qui n'arborent pas leurs armoiries.",
    banner: "milice_griffes_hivernales",
    latitude: 430,
    longitude: 315,
    npc: [],
  },
  {
    id: 6,
    title: "Caserne",
    icon: "barracks",
    description:
      "Cette caserne est un avant-poste chargé de filtrer les entrées dans le Parvis des Érudits.",
    banner: "caserne",
    latitude: 370,
    longitude: 780,
    npc: [],
  },
  {
    id: 7,
    title: "Arènes",
    icon: "coliseum",
    description:
      "Les Arènes sont un lieu de spectacles et de combats. Elles attirent des foules enthousiastes, avides de voir des duels épiques ainsi que les riches propriétaires qui se délectent des affrontements en pariant allégrement sur leur victoire.",
    banner: "arene",
    latitude: 320,
    longitude: 420,
    npc: [],
  },
  {
    id: 8,
    title: "Temple de Moradin",
    icon: "temple",
    description:
      "Le Temple de Moradin du Parvis des Érudits est un sanctuaire richissime dédié au dieu des forgerons et des artisans. C'est un lieu sacré où les fidèles viennent prier pour la bénédiction divine sur leurs œuvres et où l'opulence est fièrement exposée afin de s'attirer les grâces divines.",
    banner: "temple_moradin_riche",
    latitude: 330,
    longitude: 865,
    npc: [],
  },
  {
    id: 9,
    title: "Bains publics",
    icon: "towel",
    description:
      "Les Bains publics sont un endroit prisé par la population pour se détendre et se revitaliser. Offrant des installations gratuites, c'est un lieu de rencontre où l'on discute affaires et plaisirs.",
    banner: "bains_publics",
    latitude: 170,
    longitude: 460,
    npc: [],
  },
  {
    id: 10,
    title: "Le Grand Bazar",
    icon: "trade",
    description:
      "Le Grand Bazar est le cœur commercial de la ville, un lieu où les marchands de toutes sortes se réunissent pour vendre leurs marchandises. On y trouve majoritairement les ressources importées de tout l'archipel permettant de se nourrir et de se chauffer.",
    banner: "grand_bazar",
    latitude: 545,
    longitude: 605,
    npc: [],
  },
  {
    id: 11,
    title: "Atelier des Maîtres-Forgerons",
    icon: "anvil",
    description:
      "L'Atelier des Maîtres-Forgerons est un centre d'excellence pour la forge, où les artisans les plus habiles travaillent le métal avec une précision inégalée. C'est ici que sont créées les armes et armures les plus fines.",
    banner: "forges",
    latitude: 587,
    longitude: 167,
    npc: [],
  },
  {
    id: 12,
    title: "Temple de Moradin",
    icon: "temple",
    description:
      "Ce Temple de Moradin, bien que modeste, est le principal lieu de prière de la ville.",
    banner: "temple_moradin",
    latitude: 535,
    longitude: 663,
    npc: [],
  },
  {
    id: 13,
    title: "Académie de magie",
    icon: "academy",
    description:
      "L'académie de magie est l'institution où les apprentis sorciers et mages viennent étudier les arcanes. Connue pour ses bibliothèques remplies de grimoires anciens, elle attire des érudits de tout l'archipel.",
    banner: "academie",
    latitude: 395,
    longitude: 945,
    npc: [],
  },
  {
    id: 14,
    title: "Chantier Naval",
    icon: "ship",
    description:
      "Le Chantier Naval est le centre de construction et de réparation des navires. Situé au bord de la mer, il est essentiel pour assurer le flux maritime et regorge de vie de nuit comme de jour.",
    banner: "chantier_naval",
    latitude: 630,
    longitude: 455,
    npc: [],
  },
  {
    id: 15,
    title: "Arsenal de la Garde",
    icon: "weapons",
    description:
      "L'Arsenal de la Garde est un dépôt d'armes et de munitions, utilisé par les Griffes Hivernales et les casernes. Il abrite un vaste assortiment d'armes, prêtes à être déployées en cas de besoin.",
    banner: "arsenal",
    latitude: 383,
    longitude: 274,
    npc: [],
  },
  {
    id: 16,
    title: "Prison de Fer",
    icon: "prison",
    description:
      "La Prison de Fer est un batîment austère où sont enfermés les criminels les plus dangereux. Ses murs épais et ses gardes vigilants rendent toute évasion presque impossible.",
    banner: "prison",
    latitude: 410,
    longitude: 388,
    npc: [],
  },
  {
    id: 17,
    title: "Théâtre",
    icon: "theater",
    description:
      "Le Théâtre est un lieu culturel de premier plan, où se jouent des pièces, des opéras et des spectacles de danse. Il est apprécié pour son architecture magnifique et ses productions artistiques.",
    banner: "theatre",
    latitude: 380,
    longitude: 865,
    npc: [],
  },
  {
    id: 18,
    title: "Bibliothèque",
    icon: "books",
    description:
      "La bibliothèque est un trésor de connaissances, abritant des milliers de livres, parchemins et manuscrits. Accessible depuis le temple de Moradin, c'est un des rares lieux regorgeant de connaissances accessible à tous. Fin à tous ceux qui sont autorisés à fouler le Parvis des Érudits.",
    banner: "bibliotheque",
    latitude: 319,
    longitude: 880,
    npc: [],
  },
  {
    id: 19,
    title: "Bosquet des Ancêtres",
    icon: "tree",
    description:
      "Le Bosquet des Ancêtres est un lieu sacré où repose les défunts. D'un silence pesant, ce lieu de recueil a été conçu pour être isolé du bruit infernal de la ville.",
    banner: "bosquet_ancetres",
    latitude: 320,
    longitude: 305,
    npc: [],
  },
  {
    id: 20,
    title: "Jardin des Brises",
    icon: "tree",
    description:
      "Le Jardin des Brises est un havre de tranquillité et de verdure au milieu d'une ville agitée, où l'on peut se promener parmi les arbres et les fleurs tout en profitant de la brise légère qui souffle constamment à travers ce lieu enchanteur. De nombreux cours de pratique de la magie se déroule en ce lieu.",
    banner: "jardin_brise",
    latitude: 310,
    longitude: 640,
    npc: [],
  },
  {
    id: 21,
    title: "Arcanum Mystique",
    icon: "magic",
    description:
      "L'Arcanum Mystique est une boutique de magie mystique. On dirait presque qu'elle flotte entre plusieurs plans.",
    banner: "arcanum_mystique",
    latitude: 415,
    longitude: 805,
    npc: [],
  },
  {
    id: 22,
    title: "Alchimiste",
    icon: "chemical",
    description:
      "L'Alchimiste est un atelier où se concoctent potions, élixirs et autres breuvages mystérieux. Cet endroit est fréquenté par ceux qui cherchent des remèdes rares, des poisons mortels ou toute sorte de composants.",
    banner: "alchimiste",
    latitude: 460,
    longitude: 500,
    npc: [],
  },
  {
    id: 23,
    title: "Hôpital de la Garde Blanche",
    icon: "hospital",
    description:
      "L'Hôpital de la Garde Blanche est un établissement médical, où les guérisseurs soignent les blessés et les malades avec des remèdes et des sorts. Il n'est pas réputé pour la qualité de ses soins ni son accueil, mais cela fait des années qu'il survit sans aide financière extérieure afin d'aider quiconque est dans le besoin.",
    banner: "hopital",
    latitude: 310,
    longitude: 492,
    npc: [],
  },
  {
    id: 24,
    title: "Grande Fonderie",
    icon: "foundry",
    description:
      "La Grande Fonderie est l'endroit où le métal apporté par bateau est fondu pour être acheminé dans les forges. C'est un lieu industriel vital pour l'activité de la ville.",
    banner: "fonderie",
    latitude: 580,
    longitude: 110,
    npc: [],
  },
  {
    id: 25,
    title: "Entrepôts des forges",
    icon: "box",
    description:
      "Les entrepôts des forges stockent les matériaux bruts et les produits finis des ateliers de la ville. Ces grands bâtiments sont essentiels pour l'approvisionnement des artisans.",
    banner: "entrepots_forge",
    latitude: 600,
    longitude: 230,
    npc: [],
  },
  {
    id: 26,
    title: "L'Étincelle d'Ivoire",
    icon: "tavern",
    description:
      "L'Étincelle d'Ivoire est une auberge élégante, connue pour son décor raffiné et ses vins fins. C'est un lieu privilégié pour les voyageurs fortunés et les habitants de la haute société.",
    banner: "etincelle_ivoire",
    latitude: 470,
    longitude: 880,
    npc: [],
  },
  {
    id: 27,
    title: "Armurerie",
    icon: "armor",
    description:
      "L'armurerie est l'endroit où l'on fabrique et répare les armures de la ville. Des pièces de haute qualité sont forgées ici, destinées aux guerriers et aux gardes en quête de protection robuste.",
    banner: "armurerie",
    latitude: 525,
    longitude: 285,
    npc: [],
  },
  {
    id: 28,
    title: "Phare",
    icon: "lighthouse",
    description:
      "Le phare est un guide pour les navires qui approchent de la ville, éclairant leur chemin à travers les eaux dangereuses. Il est essentiel pour assurer la sécurité du port, surtout par mauvais temps.",
    banner: "phare",
    latitude: 654,
    longitude: 648,
    npc: [],
  },
  {
    id: 29,
    title: "Entrepôts du port",
    icon: "box",
    description:
      "Les entrepôts du port sont des bâtiments spacieux où sont stockées les marchandises arrivant et partant par la mer. Ils jouent un rôle crucial dans le commerce maritime de la ville.",
    banner: "entrepots_port",
    latitude: 600,
    longitude: 710,
    npc: [],
  },
  {
    id: 30,
    title: "Observatoire Astronomique",
    icon: "observatory",
    description:
      "L'observatoire astronomique est un lieu de recherche où les érudits et les mages observent les étoiles et les planètes. Il est équipé de télescopes puissants et de cartes des plans détaillées.",
    banner: "observatoire_astronomique",
    latitude: 494,
    longitude: 1025,
    npc: [],
  },
  {
    id: 31,
    title: "Caserne",
    icon: "barracks",
    description:
      "Cette caserne, située sur la grande place de la Porte du Givre, est chargée de la sécurité des Plaines Cendrées ainsi que sur la garde de la Porte.",
    banner: "caserne",
    latitude: 137,
    longitude: 610,
    npc: [],
  },
];

export default places;
