'use client';
import { useEffect, useState } from "react";
export default function Carousel() {
    
    const [cats, setCats] = useState ([]);

    useEffect (() => {
        const fetchCats = async () => {
            const response = await fetch ('https://api.thecatapi.com/v1/images/search?limit=10')
            const data = await response.json();
            setCats(data);
        };
        fetchCats ();
}, []);
    
    return (
        <div className="grid grid-cols-2 gap-4 p-4"> 
            {cats.map((cat: any) => (
                <img key={cat.id} src={cat.url} alt="Gato fofo" className="rounded-lg shadow-md" />
            ))}
        </div>
    );       
}