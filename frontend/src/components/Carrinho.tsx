import { useEffect, useState } from 'react';
import axios from 'axios';

const Carrinho = ({ onProxima }: { onProxima: () => void }) => {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/carrinho`).then((res) => {
      setCarrinho(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Carrinho</h1>
      <ul>
        {carrinho.map((item: any) => (
          <li key={item.id}>
            Produto ID: {item.produto_id} | Quantidade: {item.quantidade}
          </li>
        ))}
      </ul>
      <button onClick={onProxima} className="bg-green-500 text-white px-4 py-2 mt-4">
        Próxima Etapa
      </button>
    </div>
  );
};

export default Carrinho;
