import { useState } from 'react';
import axios from 'axios';

const Pagamento = () => {
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const realizarPagamento = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/pagamento`, {
        nomeCartao,
        numeroCartao,
        validade,
        cvv,
      });
      alert(response.data.status); // Exibe o status do pagamento
    } catch (error) {
      console.error('Erro ao realizar pagamento:', error);
      alert('Erro ao realizar pagamento. Tente novamente.');
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Pagamento</h1>
      <div className="mt-4">
        <label className="block">
          Nome no cartão
          <input
            type="text"
            value={nomeCartao}
            onChange={(e) => setNomeCartao(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </label>
        <label className="block mt-4">
          Número do cartão
          <input
            type="text"
            value={numeroCartao}
            onChange={(e) => setNumeroCartao(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </label>
        <label className="block mt-4">
          Validade
          <input
            type="text"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            placeholder="MM/AA"
            required
          />
        </label>
        <label className="block mt-4">
          CVV
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
        </label>
      </div>
      <button
        onClick={realizarPagamento}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        disabled={!nomeCartao || !numeroCartao || !validade || !cvv}
      >
        Realizar Pagamento
      </button>
    </div>
  );
};

export default Pagamento;
