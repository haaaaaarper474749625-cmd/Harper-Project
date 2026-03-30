export type Country = {
  slug: string;
  name: string;
  nameZh: string;
  region: string;
  intro: string;
  heritage: string;
  accent: string;
  breedSlugs: string[];
  highlightBreedSlugs: string[];
};

export type Breed = {
  slug: string;
  name: string;
  countrySlug: string;
  countryName: string;
  countryNameZh: string;
  group: string;
  size: string;
  coat: string;
  lifespan: string;
  temperament: string[];
  summary: string;
  originStory: string;
  bestFor: string[];
  facts: string[];
};
