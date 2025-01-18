import { fetchCats } from './services/catApi';
import Cardgatos from '../components/cardgatos';

// Função de página que busca dados diretamente
export default async function Home() {
  const cats = await fetchCats(10); // Obtemos 10 gatos da API

  return (
    <>
    <div id='home'>
      <h1 id='title'>Cat Gallery</h1>
      <Cardgatos cats={cats} />
    </div>
    </>
  );
}
