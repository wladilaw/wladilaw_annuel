import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-2xl font-serif font-semibold">MotivaPro</span>
          <nav>
            <Link href="#features" className="hover:underline">
              Fonctionnalités
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
            Créez des lettres de motivation percutantes
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
            Notre plateforme vous accompagne pour rédiger des lettres professionnelles et personnalisées adaptées à votre profil.
          </p>
          <Link
            href="#features"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Découvrir
          </Link>
        </section>
        <section id="features" className="py-20 bg-white px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold text-center mb-12">
              Fonctionnalités principales
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="text-center flex flex-col items-center">
                <Image src="/globe.svg" alt="Personnalisation" width={48} height={48} className="mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2">Personnalisation</h3>
                <p className="text-gray-600">Adaptez chaque lettre à votre parcours professionnel.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <Image src="/window.svg" alt="Conseils" width={48} height={48} className="mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2">Conseils professionnels</h3>
                <p className="text-gray-600">Bénéficiez de suggestions pour améliorer vos lettres.</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <Image src="/file.svg" alt="Export" width={48} height={48} className="mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2">Export facile</h3>
                <p className="text-gray-600">Téléchargez vos lettres prêtes à l&apos;emploi en un clic.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-sm text-gray-500 text-center py-6 bg-gray-100">
        © {year} MotivaPro. Tous droits réservés.
      </footer>
    </div>
  );
}
