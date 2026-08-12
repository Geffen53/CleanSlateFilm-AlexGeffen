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
  laurelDark: string;
  laurelLight: string;
};

export type ProducerGroup = {
  role: string;
  names: string[];
};

export type CreativeConsultant = {
  name: string;
  description: string;
  url: string;
  logo?: string;
};
