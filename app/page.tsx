"use client";

import { useState } from "react";

type Language = "en" | "fr";

const copy = {
  en: {
    brand: "Muse Maison",
    heroKicker: "Refined Home Essentials",
    heroTitle: "Elevate Your Everyday / Sublimez votre quotidien",
    intro:
      "Curated pieces designed to bring calm, beauty, and intention to modern rituals.",
    cta: "Explore Collection",
    categoriesTitle: "Shop by Category",
    categories: [
      "Cookware",
      "Drinkware",
      "Tableware",
      "Serveware",
      "Kitchen Textiles",
      "Home Decor",
      "Storage",
      "Gift Sets",
    ],
  },
  fr: {
    brand: "Muse Maison",
    heroKicker: "Essentiels Maison Raffines",
    heroTitle: "Elevate Your Everyday / Sublimez votre quotidien",
    intro:
      "Des pieces selectionnees pour apporter calme, beaute et intention aux rituels du quotidien.",
    cta: "Decouvrir la Collection",
    categoriesTitle: "Acheter par categorie",
    categories: [
      "Batterie de cuisine",
      "Verres et tasses",
      "Arts de la table",
      "Service de table",
      "Textiles de cuisine",
      "Decoration",
      "Rangement",
      "Coffrets cadeaux",
    ],
  },
} satisfies Record<
  Language,
  {
    brand: string;
    heroKicker: string;
    heroTitle: string;
    intro: string;
    cta: string;
    categoriesTitle: string;
    categories: string[];
  }
>;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#2e3238]">
      <main>
        <section
          className="relative isolate min-h-[78vh] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17, 19, 23, 0.45), rgba(17, 19, 23, 0.5)), url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto flex w-full max-w-6xl items-start justify-between px-6 pt-8 md:px-10">
            <span className="text-xs font-medium tracking-[0.22em] uppercase text-white/85">
              {t.brand}
            </span>

            <div className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-xs tracking-[0.18em] text-white">
              <button
                type="button"
                className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-60 hover:opacity-85"}`}
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
              >
                EN
              </button>
              <span className="px-2 opacity-60">/</span>
              <button
                type="button"
                className={`transition-opacity ${language === "fr" ? "opacity-100" : "opacity-60 hover:opacity-85"}`}
                onClick={() => setLanguage("fr")}
                aria-pressed={language === "fr"}
              >
                FR
              </button>
            </div>
          </div>

          <div className="mx-auto flex min-h-[68vh] w-full max-w-6xl items-end px-6 pb-16 pt-14 md:px-10">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs tracking-[0.28em] uppercase text-white/75">
                {t.heroKicker}
              </p>
              <h1 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                {t.intro}
              </p>
              <button
                type="button"
                className="mt-10 border border-white/90 px-6 py-3 text-xs font-medium tracking-[0.16em] uppercase text-white transition hover:bg-white hover:text-[#1f2328]"
              >
                {t.cta}
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-medium tracking-tight text-[#1f2328] md:text-3xl">
              {t.categoriesTitle}
            </h2>
            <div className="h-px flex-1 bg-[#d8d2c7]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.categories.map((category) => (
              <article
                key={category}
                className="group border border-[#ddd6ca] bg-[#fcfbf8] px-5 py-7 transition-colors hover:border-[#b8ad99]"
              >
                <h3 className="text-sm font-medium tracking-[0.08em] uppercase text-[#343941]">
                  {category}
                </h3>
                <p className="mt-3 text-xs text-[#7b7f86] opacity-0 transition-opacity group-hover:opacity-100">
                  {language === "en" ? "View selection" : "Voir la selection"}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
