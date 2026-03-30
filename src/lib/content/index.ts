import type { Breed, Country } from "@/content/types";
import { localContentSource } from "@/lib/content/local-content-source";

// This indirection is the seam for future CMS adoption.
const contentSource = localContentSource;

export async function getAllCountries(): Promise<Country[]> {
  return contentSource.getAllCountries();
}

export async function getCountryBySlug(
  slug: string,
): Promise<Country | undefined> {
  return contentSource.getCountryBySlug(slug);
}

export async function getAllBreeds(): Promise<Breed[]> {
  return contentSource.getAllBreeds();
}

export async function getBreedBySlug(
  slug: string,
): Promise<Breed | undefined> {
  return contentSource.getBreedBySlug(slug);
}

export async function getBreedsByCountry(countrySlug: string): Promise<Breed[]> {
  const breeds = await contentSource.getAllBreeds();
  return breeds.filter((breed) => breed.countrySlug === countrySlug);
}
