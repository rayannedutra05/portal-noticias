import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Portal de Notícias
        </h1>

        <div className="flex flex-col gap-3 w-full">
          <Link
            href="/home"
            className="w-full text-center bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg"
          >
            Home
          </Link>

          <Link
            href="/contatos"
            className="w-full text-center bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-lg"
          >
            Contatos
          </Link>

          <Link
            href="/noticias"
            className="w-full text-center bg-black hover:bg-gray-800 transition text-white py-2 rounded-lg"
          >
            Notícias
          </Link>
        </div>
      </div>
    </main>
  );
}
