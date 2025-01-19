// app/cat/[id]/page.tsx
'use client'; // Necessário para usar hooks do React

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchCatById } from '../../services/catApi';

interface CatDetails {
  id: string;
  url: string;
  breeds?: {
    weight: { metric: string };
    name: string;
    temperament: string;
  }[];
}

export default function Dadosgato() {
  const { id } = useParams(); // Obtém o ID do gato na URL
  const [cat, setCat] = useState<CatDetails | null>(null);

  useEffect(() => {
    const loadCat = async () => {
      const data = await fetchCatById(id as string); // Busca os detalhes do gato
      setCat(data);
    };
    loadCat();
  }, [id]);

  if (!cat) return <p>Carregando...</p>;

  return (
    <div className="cat-details-page">
      <h1>{cat.breeds ? cat.breeds[0].name : 'Nome não disponível'}</h1>
      <img src={cat.url} alt="Gato" style={{ width: '400px' }} />
      {cat.breeds && (
        <div>
          <p>
            <strong>Peso:</strong> {cat.breeds[0].weight.metric} kg
          </p>
          <p>
            <strong>Temperamento:</strong> {cat.breeds[0].temperament}
          </p>
        </div>
      )}
    </div>
  );
}
