import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css"; 

export const metadata = {
  title: "Portal de Notícias",
  description: "Portal de notícias com destaque para seções e carrossel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-100 p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
