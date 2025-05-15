import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        {/* Agrega esta sección de navegación */}
        <nav className="flex gap-4">
          <Link 
            href="/productos" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Módulo de Productos
          </Link>
          <Link 
            href="/usuarios" 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Módulo de Usuarios
          </Link>
        </nav>

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {/* ... resto del código existente ... */}
        </ol>
      </main>
      {/* ... resto del footer existente ... */}
    </div>
  );
}
