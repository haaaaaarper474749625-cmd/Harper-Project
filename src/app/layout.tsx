import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harper Project | Global Dog Atlas",
  description:
    "A Vercel-ready dog breed content website organized by country, built with local content files and a CMS-ready architecture.",
};

const navigation = [
  { href: "/countries", label: "Countries" },
  { href: "/breeds", label: "Breeds" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="text-stone-950">
        <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col">
          <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-[#fbf7f1]/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
              <Link href="/" className="flex flex-col">
                <span className="font-display text-2xl leading-none text-stone-950">
                  Harper Project
                </span>
                <span className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-500">
                  Global Dog Atlas
                </span>
              </Link>
              <nav className="flex items-center gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm text-stone-700 transition hover:bg-white hover:text-stone-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {children}

          <footer className="border-t border-stone-200 bg-[#f4ede1]">
            <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-10 md:px-10 lg:grid-cols-[1fr_auto] lg:px-12">
              <div>
                <p className="font-display text-2xl text-stone-950">
                  Harper Project
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-700">
                  首版采用本地内容文件驱动，适合快速上线和持续扩展。后续如需接入
                  Headless CMS，只需要替换内容来源层即可。
                </p>
              </div>
              <div className="text-sm text-stone-600">
                <p>Built with Next.js App Router</p>
                <p className="mt-2">Ready for Vercel deployment</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
