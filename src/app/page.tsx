import { getExpectedRequestStore } from "next/dist/server/app-render/work-unit-async-storage.external";
import Image from "next/image";
import { useEffect, useState } from "react";
const Fetch = () => {
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')

      setData(response.data)
    } catch(error) {
      console.log(error)
    }
  }    

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <>
    <h2>Fetch</h2>
    </>
  )
}
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-[family-name:var(--font-geist-sans)]">
     
    <header className="w-full text-center bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">O Mundo dos Bigodes</h1>
    </header>
    
    <main className="flex-grow flex justify-center items-center">
      <h2>Miauzinho</h2>
    </main>
    
    <footer className="w-full text-center bg-gray-800 text-white p-4">
      <p>&copy; 2025 O Mundo dos Bigodes. Todos os direitos reservados.</p>
    </footer>

  </div>
  );
}
