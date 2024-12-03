import { useState, useEffect } from "react";
import Header from "./components/Header";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
import Pagamento from "./components/Pagamento";
import { Entrega } from "./components/Entrega";
import axios from "axios";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

interface CarrinhoItem extends Produto {
  quantidade: number;
}

const App = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);
  const [valorEntrega, setValorEntrega] = useState<number>(0);
  const [busca, setBusca] = useState("");
  const [etapa, setEtapa] = useState<"galeria" | "pagamento" | "entrega">(
    "galeria"
  );

  // Buscar produtos
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/produtos`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProdutos(response.data);
        } else {
          console.error("Dados inesperados da API:", response.data);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  // Adicionar ao carrinho
  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find(
        (item) => item.id === produto.id
      );
      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prevCarrinho, { ...produto, quantidade: 1 }];
    });
  };

  // Remover do carrinho
  const removerDoCarrinho = (id: number) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.id !== id)
    );
  };

  // Limpar carrinho
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  // Total do carrinho
  const valorTotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  const handleAvancarParaPagamento = () => {
    setEtapa("pagamento");
  };

  const handleAvancarParaEntrega = () => {
    setEtapa("entrega");
  };

  const handleVoltarParaGaleria = () => {
    limparCarrinho();
    setEtapa("galeria");
  };

  return (
    <div className="w-full">
      <Header
        carrinho={carrinho}
        removerDoCarrinho={removerDoCarrinho}
        valorTotal={valorTotal}
        busca={busca}
        setBusca={setBusca}
        onFinalizarCompra={handleAvancarParaPagamento}
      />
      {etapa === "galeria" && (
        <Galeria produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />
      )}
      {etapa === "pagamento" && (
        <Pagamento
          carrinho={carrinho}
          valorEntrega={valorEntrega}
          setValorEntrega={setValorEntrega} 
          removerDoCarrinho={removerDoCarrinho}
          onAvancar={handleAvancarParaEntrega}
        />
      )}
      {etapa === "entrega" && (
        <Entrega
          limparCarrinho={limparCarrinho}
          carrinho={carrinho}
          setValorEntrega={setValorEntrega}
          onEnviar={handleVoltarParaGaleria}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
