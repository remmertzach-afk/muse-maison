"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "en" | "fr";

const copy = {
  en: {
    brand: "Muse Maison",
    slogan: "Elevate Your Everyday",
    intro:
      "Refined essentials for modern living. Thoughtful forms, rich textures, and timeless detail.",
    explore: "Explore Collection",
    categoriesTitle: "Product Categories",
    categories: [
      "Furniture",
      "Lighting",
      "Tableware",
      "Decor",
      "Textiles",
      "Lifestyle",
    ],
  },
  fr: {
    brand: "Muse Maison",
    slogan: "Sublimez Votre Quotidien",
    intro:
      "Des essentiels raffines pour un art de vivre moderne. Des formes pensees, des textures riches et des details intemporels.",
    explore: "Decouvrir la Collection",
    categoriesTitle: "Categories de Produits",
    categories: [
      "Mobilier",
      "Luminaires",
      "Art de la table",
      "Decoration",
      "Textiles",
      "Lifestyle",
    ],
  },
} satisfies Record<
  Language,
  {
    brand: string;
    slogan: string;
    intro: string;
    explore: string;
    categoriesTitle: string;
    categories: string[];
  }
>;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  return (
    <div className="min-h-screen bg-[#f6f3ef] text-[#4f5b66]">
      <header className="sticky top-0 z-20 border-b border-[#d9d4cb]/80 bg-[#f6f3ef]/95 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Muse Maison logo"
              width={40}
              height={40}
              className="rounded-sm object-cover"
              priority
            />
            <span className="text-sm font-medium tracking-[0.18em] uppercase text-[#2f3a44]">
              {t.brand}
            </span>
          </div>

          <div className="text-sm font-medium tracking-widest text-[#4f5b66]">
            <button
              type="button"
              className={`transition-colors ${language === "en" ? "text-[#2f3a44]" : "text-[#7b8792]"}`}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <span className="px-2 text-[#9ba5ae]">|</span>
            <button
              type="button"
              className={`transition-colors ${language === "fr" ? "text-[#2f3a44]" : "text-[#7b8792]"}`}
              onClick={() => setLanguage("fr")}
              aria-pressed={language === "fr"}
            >
              FR
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section
          className="relative isolate flex min-h-[70vh] items-center overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47, 58, 68, 0.45), rgba(47, 58, 68, 0.45)), url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-[#f6f3ef]/80">
              {t.brand}
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#f6f3ef] md:text-6xl">
              {t.slogan}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#f6f3ef]/90 md:text-lg">
              {t.intro}
            </p>
            <button
              type="button"
              className="mt-10 border border-[#f6f3ef] px-6 py-3 text-sm font-medium tracking-[0.12em] uppercase text-[#f6f3ef] transition hover:bg-[#f6f3ef] hover:text-[#2f3a44]"
            >
              {t.explore}
            </button>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight text-[#2f3a44] md:text-3xl">
            {t.categoriesTitle}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.categories.map((category) => (
              <article
                key={category}
                className="border border-[#d9d4cb] bg-[#fdfbf8] p-7 transition hover:border-[#a9b3bc]"
              >
                <h3 className="text-lg font-medium text-[#2f3a44]">{category}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
