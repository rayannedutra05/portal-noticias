"use client";

import { newsData } from "../utils/mock/mock";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <main className="p-6 space-y-12">
      <h1 className="text-3xl font-bold mb-6">Portal de Notícias</h1>

      {newsData.map((section, sectionIndex) => (
        <div key={section.section}>
          <section>
            <h2 className="text-2xl font-semibold mb-6">{section.section}</h2>

            {section.articles.length > 0 && (
              <>
                <div className="mb-6 border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img
                    src={section.articles[0].image}
                    alt={section.articles[0].title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="p-6 bg-gray-50">
                    <p className="text-sm text-red-600 font-semibold">{section.articles[0].theme}</p>
                    <h3 className="text-3xl font-bold mt-2">{section.articles[0].title}</h3>
                    <p className="mt-4 text-gray-700">{section.articles[0].description}</p>

                    <a
                      href="#"
                      className="inline-block mt-4 text-red-600 font-semibold underline hover:text-red-800 transition"
                    >
                      Saiba mais &rarr;
                    </a>
                  </div>
                </div>

                {/* O restante das notícias */}
                {section.articles.length <= 3 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.articles.slice(1).map((article, index) => (
                      <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-xs text-red-600 font-semibold">{article.theme}</p>
                          <h3 className="font-bold text-lg mt-1">{article.title}</h3>
                          <p className="text-gray-700 mt-2 text-sm">{article.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    modules={[Navigation, Pagination]}
                  >
                    {section.articles.slice(1).map((article, index) => (
                      <SwiperSlide key={index}>
                        <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <p className="text-xs text-red-600 font-semibold">{article.theme}</p>
                            <h3 className="font-bold text-lg mt-1">{article.title}</h3>
                            <p className="text-gray-700 mt-2 text-sm">{article.description}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </>
            )}
          </section>

          {sectionIndex < newsData.length - 1 && (
            <hr className="border-t-4 border-black my-12" />
          )}
        </div>
      ))}
    </main>
  );
}
