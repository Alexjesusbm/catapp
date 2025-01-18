import axios from 'axios';

// Configuração do cliente Axios
const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY!,
  },
});

// Buscar lista de gatos
export const fetchCats = async (limit: number = 10) => {
  const response = await apiClient.get('/images/search', {
    params: { limit, has_breeds: 1 }, // Inclui apenas gatos com raça
  });
  return response.data;
};


// Buscar detalhes de um gato pelo ID
export const fetchCatById = async (id: string) => {
  const response = await apiClient.get(`/images/${id}`);
  return response.data;
};
