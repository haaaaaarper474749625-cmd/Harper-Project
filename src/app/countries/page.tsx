import Link from "next/link";
import { getAllCountries } from "@/lib/content";

export const metadata = {
  title: "Countries | Harper Project",
  description: "Browse dog breeds by country of origin.",
};

export default async function CountriesPage() {
  const countries = await getAllCountries();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-6 py-10 md:px-10 lg:px-12">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Countries
        </p>
        <h1 className="mt-3 font-display text-5xl text-stone-950">
          按国家探索狗品种
        </h1>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          当前首版先以代表性国家和典型犬种做内容示例，后续可以继续扩展更多国家、地区和专题集合。
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {countries.map((country) => (
          <Link
            key={country.slug}
            href={`/countries/${country.slug}`}
            className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(73,52,33,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(73,52,33,0.1)]"
          >
            <div
              className="h-2 rounded-full"
              style={{ backgroundColor: country.accent }}
            />
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-500">
              {country.region}
            </p>
            <h2 className="mt-3 font-display text-3xl text-stone-950">
              {country.name}
            </h2>
            <p className="mt-1 text-sm text-stone-500">{country.nameZh}</p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              {country.heritage}
            </p>
            <div className="mt-5 flex items-center justify-between text-sm text-stone-600">
              <span>{country.breedSlugs.length} breeds</span>
              <span>View detail</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
