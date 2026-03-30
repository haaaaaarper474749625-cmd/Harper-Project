import Link from "next/link";
import { getAllBreeds } from "@/lib/content";

export const metadata = {
  title: "Breeds | Harper Project",
  description: "Browse featured dog breeds from around the world.",
};

export default async function BreedsPage() {
  const breeds = await getAllBreeds();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-6 py-10 md:px-10 lg:px-12">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
          Breeds
        </p>
        <h1 className="mt-3 font-display text-5xl text-stone-950">
          全球狗品种目录
        </h1>
        <p className="mt-4 text-lg leading-8 text-stone-700">
          这里先展示首版样例品种，结构已经按内容站方式搭好，后面继续追加内容或改为 CMS 驱动都比较顺滑。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {breeds.map((breed) => (
          <Link
            key={breed.slug}
            href={`/breeds/${breed.slug}`}
            className="rounded-[1.75rem] border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:border-stone-300"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              {breed.countryName}
            </p>
            <h2 className="mt-3 font-display text-3xl text-stone-950">
              {breed.name}
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              {breed.group} / {breed.size}
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-700">
              {breed.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {breed.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
