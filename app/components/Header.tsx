"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/home", label: "HOME" },
    { href: "/news", label: "NEWS" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="w-full border-b">
      <div className="bg-red-600 text-white overflow-hidden py-2 border-b-2 border-black">
        <div
          className="flex whitespace-nowrap font-bold text-xs gap-12"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          <span>MERCADOS GLOBAIS ATINGEM RECORDE • </span>
          <span>NOVA TECNOLOGIA TRANSFORMA O MERCADO • </span>
          <span>INOVAÇÃO MUDA O FUTURO DAS EMPRESAS • </span>
          <span>MERCADOS GLOBAIS ATINGEM RECORDE • </span>
          <span>NOVA TECNOLOGIA TRANSFORMA O MERCADO • </span>
          <span>INOVAÇÃO MUDA O FUTURO DAS EMPRESAS • </span>
          <span>MERCADOS GLOBAIS ATINGEM RECORDE • </span>
          <span>NOVA TECNOLOGIA TRANSFORMA O MERCADO • </span>
          <span>INOVAÇÃO MUDA O FUTURO DAS EMPRESAS • </span>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-white relative">
        <h1 className="text-2xl font-serif italic">
          THE <span className="font-bold not-italic">NEWS</span>
        </h1>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 border-b-2 transition ${isActive
                  ? "border-red-600 font-bold"
                  : "border-transparent hover:border-red-600 hover:font-bold"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Pesquise..."
            className="border-b outline-none text-sm"
          />
          <button className="bg-black text-white px-4 py-1 text-xs">
            SUBSCRIBE
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden z-10">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-1 border-b-2 transition ${isActive
                    ? "border-red-600 font-bold"
                    : "border-transparent hover:border-red-600 hover:font-bold"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Pesquise..."
                className="border-b outline-none text-sm flex-1"
              />
              <button className="bg-black text-white px-4 py-1 text-xs">
                SUBSCRIBE
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
