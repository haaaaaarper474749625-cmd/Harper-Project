import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCountries, getBreedBySlug, getCountryBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const countries = await getAllCountries();
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = await getCountryBySlug(slug);

  if (!country) {
    return {
      title: "Country Not Found | Harper Project",
    };
  }

  return {
    title: `${country.name} | Harper Project`,
    description: country.intro,
  };
}

export default async function CountryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const country = await getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const breeds = (
    await Promise.all(country.breedSlugs.map((breedSlug) => getBreedBySlug(breedSlug)))
  ).filter((breed) => breed !== undefined);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-6 py-10 md:px-10 lg:px-12">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(73,52,33,0.06)]">
        <div
          className="h-3 w-full"
          style={{ backgroundColor: country.accent }}
        />
        <div className="grid gap-8 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              {country.region}
            </p>
            <h1 className="mt-3 font-display text-5xl text-stone-950">
              {country.name}
            </h1>
            <p className="mt-2 text-base text-stone-500">{country.nameZh}</p>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              {country.intro}
            </p>
          </div>
          <div className="grid gap-4 rounded-[1.5rem] bg-stone-50 p-6">
            <div className="rounded-[1.25rem] border border-stone-200 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Heritage
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                {country.heritage}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-stone-200 bg-white p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Focus
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {country.highlightBreedSlugs.map((breedSlug) => (
                  <span
                    key={breedSlug}
                    className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-700"
                  >
                    {breedSlug}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Breeds from {country.name}
          </p>
          <h2 className="mt-2 font-display text-3xl text-stone-950">
            代表性品种
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {breeds.map((breed) => (
            <Link
              key={breed.slug}
              href={`/breeds/${breed.slug}`}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 transition hover:border-stone-300 hover:bg-stone-50"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                {breed.group}
              </p>
              <h3 className="mt-3 font-display text-3xl text-stone-950">
                {breed.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                {breed.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {breed.temperament.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
