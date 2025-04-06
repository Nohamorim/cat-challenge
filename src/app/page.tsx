import Carousel from "@/components/shared/CarouselCat";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-[family-name:var(--font-geist-sans)]">
 
    <header className="w-full text-center bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">O Mundo dos Bigodes</h1>
    </header>
    
    <main className="flex-grow flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4">Bigodinhos</h2>
      <Carousel />
    </main>
    
    <footer className="w-full text-center bg-gray-800 text-white p-4">
      <p>&copy; 2025 O Mundo dos Bigodes. Todos os direitos reservados.</p>
    </footer>

  </div>
  );
}
