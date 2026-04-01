import { BreedImage } from "@/components/breed-image";
import Link from "next/link";
import { getAllBreeds, getAllCountries } from "@/lib/content";

export default async function Home() {
  const countries = await getAllCountries();
  const breeds = await getAllBreeds();
  const featuredCountries = countries.slice(0, 4);
  const featuredBreeds = breeds.slice(0, 6);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 px-6 py-10 md:px-10 lg:px-12">
      <section className="grid gap-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-[radial-gradient(circle_at_top_left,_rgba(201,168,117,0.28),_transparent_36%),linear-gradient(135deg,_#fff8ef_0%,_#f6efe2_52%,_#efe2cf_100%)] p-8 shadow-[0_24px_80px_rgba(73,52,33,0.08)] md:grid-cols-[1.15fr_0.85fr] md:p-12">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-stone-300 bg-white/80 px-4 py-1 text-sm uppercase tracking-[0.3em] text-stone-700">
            Harper Project
          </span>
          <div className="space-y-4">
            <h1 className="max-w-3xl font-display text-5xl leading-none text-stone-900 md:text-7xl">
              Global Dog Atlas
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
              以国家为线索，梳理全球代表性狗品种，建立一个适合持续扩展、未来可平滑接入 CMS 的内容型网站首版。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-stone-700">
            <span className="rounded-full bg-white/80 px-4 py-2">纯内容驱动</span>
            <span className="rounded-full bg-white/80 px-4 py-2">首版无登录</span>
            <span className="rounded-full bg-white/80 px-4 py-2">无数据库依赖</span>
            <span className="rounded-full bg-white/80 px-4 py-2">Vercel Ready</span>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/countries"
              className="rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
            >
              浏览国家
            </Link>
            <Link
              href="/breeds"
              className="rounded-full border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-900 hover:bg-white/70"
            >
              查看品种
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.5rem] border border-white/60 bg-white/60 p-5 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-stone-950 p-5 text-stone-50">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-300">
                Countries
              </p>
              <p className="mt-3 font-display text-5xl">{countries.length}</p>
              <p className="mt-4 text-sm leading-6 text-stone-300">
                国家内容页以介绍、犬种列表与文化背景为核心。
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[#c9a875] p-5 text-stone-950">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-800/70">
                Breeds
              </p>
              <p className="mt-3 font-display text-5xl">{breeds.length}</p>
              <p className="mt-4 text-sm leading-6 text-stone-900/70">
                品种内容页包含基础信息、起源故事和适配人群。
              </p>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
              Content Model
            </p>
            <div className="mt-4 grid gap-3 text-sm text-stone-700">
              <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3">
                国家 - 国家详情 - 品种卡片
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3">
                品种 - 独立详情页 - 可扩展相关推荐
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3">
                ContentSource 抽象层 - 未来替换 CMS API
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Explore by Country
            </p>
            <h2 className="mt-2 font-display text-3xl text-stone-900">
              从国家进入犬种世界
            </h2>
          </div>
          <Link
            href="/countries"
            className="text-sm font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4"
          >
            查看全部国家
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredCountries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="group rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-[0_18px_50px_rgba(73,52,33,0.07)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(73,52,33,0.12)]"
            >
              <div
                className="h-2 rounded-full"
                style={{ backgroundColor: country.accent }}
              />
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-stone-500">
                {country.region}
              </p>
              <h3 className="mt-3 font-display text-3xl text-stone-950">
                {country.name}
              </h3>
              <p className="mt-1 text-sm text-stone-500">{country.nameZh}</p>
              <p className="mt-4 text-sm leading-7 text-stone-700">
                {country.intro}
              </p>
              <p className="mt-6 text-sm font-semibold text-stone-900">
                {country.breedSlugs.length} breeds
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
              Featured Breeds
            </p>
            <h2 className="mt-2 font-display text-3xl text-stone-900">
              首版示例犬种
            </h2>
          </div>
          <Link
            href="/breeds"
            className="text-sm font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4"
          >
            查看全部品种
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredBreeds.map((breed) => (
            <Link
              key={breed.slug}
              href={`/breeds/${breed.slug}`}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 transition hover:border-stone-300 hover:bg-white"
            >
              <BreedImage
                src={breed.imageSrc}
                alt={breed.imageAlt}
                className="aspect-[4/3] w-full"
                sizes="(max-width: 1280px) 50vw, 33vw"
              />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                  {breed.group}
                </p>
                <h3 className="mt-3 font-display text-3xl text-stone-950">
                  {breed.name}
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  {breed.countryNameZh} / {breed.countryName}
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  {breed.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {breed.temperament.slice(0, 3).map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full border border-stone-200 bg-white px-3 py-1 text-xs text-stone-700"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
