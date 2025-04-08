"use client";
import { Carousel } from "@/components/shared/CarouselCat";// Verifique se a importação está correta
import { useEffect, useState } from "react";

interface Cat {
  id: string;
  url: string | null;
}

export default function Home() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCats = async () => {
    setLoading(true);
    try {
      console.log("Iniciando requisição à API Bigodinhos");
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

      console.log("Resposta da API:", response);

      const data: Cat[] = await response.json();
      console.log("Dados recebidos:", data);

      if (response.ok) {
        setCats(data);
      } else {
        console.error("Erro ao carregar dados da API:", data);
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Chamada ao fetchCats iniciada.");
    fetchCats();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between font-[family-name:var(--font-geist-sans)]">
      <header className="w-full text-center bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">O Mundo dos Bigodes</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4">Bigodinhos</h2>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <Carousel cats={cats} />
          </>
        )}
      </main>

      <footer className="w-full text-center bg-gray-800 text-white p-4">
        <p>&copy; 2025 O Mundo dos Bigodes. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
