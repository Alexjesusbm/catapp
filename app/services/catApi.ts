import axios from 'axios';

// Configuração do cliente Axios
const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1', // Base URL para todas as chamadas à API
  headers: {
    'live_9kcr2kySHsMP0hBPdSibgoFEpNXbEFem2V8WFerPMB8SKbSrjLiDbJLw6fnzEWrP': process.env.NEXT_PUBLIC_CAT_API_KEY, // Chave de API para autenticação
  },
});

// Função para buscar gatos
export const fetchCats = async (limit: number = 10) => {
  const response = await apiClient.get('/images/search', {
    params: { limit }, // Passa o limite como parâmetro de consulta (query string)
  });
  return response.data; // Retorna os dados da resposta
};
