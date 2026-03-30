import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm uppercase tracking-[0.25em] text-stone-500">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl text-stone-950">
        页面未找到
      </h1>
      <p className="mt-4 text-base leading-8 text-stone-700">
        当前链接还没有内容，可能是未来 CMS 接入后才会补充的页面。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-stone-50 transition hover:bg-stone-800"
      >
        返回首页
      </Link>
    </main>
  );
}
