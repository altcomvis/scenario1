import { useEffect, useState } from 'react';
import axios from 'axios';

const Vitrine = ({ onProxima }: { onProxima: () => void }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/produtos`).then((res) => {
      setProdutos(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Vitrine</h1>
      <div className="grid grid-cols-2 gap-4">
        {produtos.map((produto: any) => (
          <div key={produto.id} className="border p-4">
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p>R$ {produto.preco.toFixed(2)}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2"
              onClick={() => axios.post(`${import.meta.env.VITE_API_URL}/carrinho`, { produtoId: produto.id, quantidade: 1 })}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
      <button onClick={onProxima} className="bg-green-500 text-white px-4 py-2 mt-4">
        Próxima Etapa
      </button>
    </div>
  );
};

export default Vitrine;
