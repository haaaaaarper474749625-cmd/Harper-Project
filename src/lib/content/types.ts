import type { Breed, Country } from "@/content/types";

export interface ContentSource {
  getAllCountries(): Promise<Country[]>;
  getCountryBySlug(slug: string): Promise<Country | undefined>;
  getAllBreeds(): Promise<Breed[]>;
  getBreedBySlug(slug: string): Promise<Breed | undefined>;
}
