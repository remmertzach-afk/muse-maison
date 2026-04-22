"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../sanity/lib/client";

type Product = {
  _id: string;
  name_en?: string;
  name_fr?: string;
  image?: string;
  category?: {
    name_en?: string;
    name_fr?: string;
  };
};

export default function Home() {
  const [lang, setLang] = useState<"EN" | "FR">("EN");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await client.fetch(`
        *[_type == "product"]{
          _id,
          name_en,
          name_fr,
          "image": image.asset->url,
          category->{
            name_en,
            name_fr
          }
        }
      `);

      console.log("Sanity products:", data);
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const content = {
    EN: {
      title: "Elevate Your Everyday",
      sub: "Curated kitchenware inspired by the Rockies, delivered across Canada.",
      cta: "Explore Collections",
      about: "Based in Calgary, Muse Maison brings the art of living to your home.",
      featured: "Featured Products",
      story: "Our Story",
      uncategorized: "Uncategorized",
      noImage: "No image",
      untitled: "Untitled Product",
    },
    FR: {
      title: "Sublimez votre quotidien",
      sub: "Des articles de cuisine inspirés des Rocheuses, livrés partout au Canada.",
      cta: "Explorer les collections",
      about: "Basée à Calgary, Muse Maison apporte l'art de vivre dans votre foyer.",
      featured: "Produits Vedettes",
      story: "Notre Histoire",
      uncategorized: "Non classé",
      noImage: "Pas d’image",
      untitled: "Produit sans nom",
    },
  };

  const t = lang === "EN" ? content.EN : content.FR;

  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#2F2F2F]">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white/80 px-8 py-4 backdrop-blur-md">
        <div className="relative h-12 w-32">
          <Image
            src="/logo.jpg"
            alt="Muse Maison Logo"
            fill
            sizes="128px"
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
          className="font-medium transition-colors hover:text-blue-600"
        >
          {lang === "EN" ? "FRANÇAIS" : "ENGLISH"}
        </button>
      </nav>

      <section className="relative flex h-[80vh] items-center justify-center text-center text-white">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover brightness-75"
          priority
        />

        <div className="relative z-10 space-y-6 px-4">
          <h1 className="text-5xl font-serif md:text-7xl">{t.title}</h1>
          <p className="mx-auto max-w-2xl text-xl">{t.sub}</p>
          <button className="rounded-full bg-white px-8 py-3 text-black transition-all hover:bg-opacity-90">
            {t.cta}
          </button>
        </div>
      </section>

      <section className="bg-[#f7f5f1] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-gray-500">
              Muse Maison
            </p>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              {t.featured}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product._id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[4/5] overflow-hidden bg-white p-6">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={
                        lang === "EN"
                          ? product.name_en || t.untitled
                          : product.name_fr || t.untitled
                      }
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                      {t.noImage}
                    </div>
                  )}
                </div>

                <div className="space-y-3 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {lang === "EN"
                      ? product.category?.name_en || t.uncategorized
                      : product.category?.name_fr || t.uncategorized}
                  </p>

                  <h3 className="text-lg font-medium text-gray-900">
                    {lang === "EN"
                      ? product.name_en || t.untitled
                      : product.name_fr || t.untitled}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-8 py-20 text-center">
        <h2 className="mb-6 text-3xl font-serif">{t.story}</h2>
        <p className="text-lg leading-relaxed text-gray-600">{t.about}</p>
      </section>
    </main>
  );
}