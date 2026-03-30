import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllBreeds,
  getBreedBySlug,
  getBreedsByCountry,
  getCountryBySlug,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const breeds = await getAllBreeds();
  return breeds.map((breed) => ({ slug: breed.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const breed = await getBreedBySlug(slug);

  if (!breed) {
    return {
      title: "Breed Not Found | Harper Project",
    };
  }

  return {
    title: `${breed.name} | Harper Project`,
    description: breed.summary,
  };
}

export default async function BreedDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const breed = await getBreedBySlug(slug);

  if (!breed) {
    notFound();
  }

  const country = await getCountryBySlug(breed.countrySlug);
  const relatedBreeds = (await getBreedsByCountry(breed.countrySlug)).filter(
    (item) => item.slug !== breed.slug,
  );

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-6 py-10 md:px-10 lg:px-12">
      <section className="grid gap-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_20px_60px_rgba(73,52,33,0.06)] md:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            {breed.countryName} / {breed.group}
          </p>
          <h1 className="mt-3 font-display text-5xl text-stone-950">
            {breed.name}
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            {breed.summary}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Size
              </p>
              <p className="mt-3 text-base text-stone-800">{breed.size}</p>
            </div>
            <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Coat
              </p>
              <p className="mt-3 text-base text-stone-800">{breed.coat}</p>
            </div>
            <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Life Span
              </p>
              <p className="mt-3 text-base text-stone-800">{breed.lifespan}</p>
            </div>
            <div className="rounded-[1.25rem] border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Country
              </p>
              <p className="mt-3 text-base text-stone-800">{breed.countryNameZh}</p>
            </div>
          </div>
        </div>

        <div className="bg-[linear-gradient(180deg,_#fbf4e8_0%,_#efdfc4_100%)] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-600">
            Temperament
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {breed.temperament.map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-white/80 px-4 py-2 text-sm text-stone-800"
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/70 bg-white/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Best For
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-stone-700">
              {breed.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Origin Story
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700">
            {breed.originStory}
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Quick Facts
          </p>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-stone-700">
            {breed.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      {country ? (
        <section className="rounded-[1.75rem] border border-stone-200 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
            Country Context
          </p>
          <h2 className="mt-2 font-display text-3xl text-stone-950">
            About {country.name}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">
            {country.heritage}
          </p>
          <Link
            href={`/countries/${country.slug}`}
            className="mt-6 inline-flex rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-50"
          >
            查看 {country.nameZh} 页面
          </Link>
        </section>
      ) : null}

      {relatedBreeds.length > 0 ? (
        <section className="grid gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Related Breeds
            </p>
            <h2 className="mt-2 font-display text-3xl text-stone-950">
              同国别的其他品种
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedBreeds.map((item) => (
              <Link
                key={item.slug}
                href={`/breeds/${item.slug}`}
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6 transition hover:border-stone-300 hover:bg-white"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                  {item.group}
                </p>
                <h3 className="mt-3 font-display text-3xl text-stone-950">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
