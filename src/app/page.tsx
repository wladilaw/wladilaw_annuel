import Link from "next/link";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">MotivaPro</span>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Créez des lettres de motivation percutantes
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          Notre plateforme vous accompagne pour rédiger des lettres professionnelles
          et personnalisées adaptées à votre profil.
        </p>
        <Link
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Commencer
        </Link>
      </main>
      <footer className="text-sm text-gray-500 text-center py-4 bg-gray-100 dark:bg-gray-900">
        © {year} MotivaPro. Tous droits réservés.
      </footer>
    </div>
  );
}
