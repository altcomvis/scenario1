import { useState } from 'react';
import axios from 'axios';

const Entrega = ({ onProxima }: { onProxima: () => void }) => {
  const [metodo, setMetodo] = useState('');
  const [preco, setPreco] = useState(0);

  const confirmarEntrega = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/entrega`, { metodo, preco });
      alert('Entrega confirmada!');
      onProxima();
    } catch (error) {
      console.error('Erro ao confirmar entrega:', error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Escolha o Método de Entrega</h1>
      <div className="mt-4">
        <label className="block">
          <input
            type="radio"
            name="entrega"
            value="PAC"
            onChange={() => {
              setMetodo('PAC');
              setPreco(15.0);
            }}
          />
          PAC - R$ 15,00
        </label>
        <label className="block">
          <input
            type="radio"
            name="entrega"
            value="Sedex"
            onChange={() => {
              setMetodo('Sedex');
              setPreco(25.0);
            }}
          />
          Sedex - R$ 25,00
        </label>
        <label className="block">
          <input
            type="radio"
            name="entrega"
            value="Sedex 10"
            onChange={() => {
              setMetodo('Sedex 10');
              setPreco(30.0);
            }}
          />
          Sedex 10 - R$ 30,00
        </label>
      </div>
      <button
        onClick={confirmarEntrega}
        className="bg-green-500 text-white px-4 py-2 mt-4"
        disabled={!metodo}
      >
        Confirmar Entrega
      </button>
    </div>
  );
};

export default Entrega;
