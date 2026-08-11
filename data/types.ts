export type Person = {
  slug?: string;
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
  knownFor?: string;
  bio: string;
};

export type CrewDepartment = {
  name: string;
  people: Person[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
};

export type Festival = {
  name: string;
  location?: string;
  date: string;
  recognition: string;
};
