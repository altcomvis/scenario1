import { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingBag, User2Icon } from 'lucide-react';
import Logo from './assets/logo.svg';
import LogoWhite from './assets/logo-white.svg';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

// Tipos e interfaces
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
  const [busca, setBusca] = useState('');
  const fetchProdutos = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/produtos`);
      if (Array.isArray(response.data)) {
        setProdutos(response.data);
      } else {
        console.error("Resposta inesperada da API:", response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };
  
  // Função para buscar os produtos no backend
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/produtos`)
      .then((response) => {
        console.log('Dados recebidos da API:', response.data); // Debug
        setProdutos(response.data); // Configura o estado
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  // Função para adicionar um item ao carrinho
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

  // Função para remover um item do carrinho
  const removerDoCarrinho = (id: number) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.id !== id)
    );
  };

  // Total do carrinho
  const valorTotal = carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  );

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='bg-rose-100 h-24 flex justify-between items-center px-20'>
        <div className='flex gap-20 items-center'>
          <img src={Logo} className='w-24' alt='Logo' />
          <nav className='flex gap-6'>
            <a href='#' className='hover:opacity-50'>
              Home
            </a>
            <a href='#' className='hover:opacity-50'>
              Categorias
            </a>
        
            <a href='#' className='hover:opacity-50'>
              Perfil
            </a>
          </nav>
        </div>
        <div className='flex gap-4 items-center'>
          <Sheet>
            <SheetTrigger asChild>
              <div className='relative'>
                <div className='absolute bg-black text-white rounded-full px-1 text-xs -top-2 -right-1 cursor-pointer'>
                  {carrinho.length}
                </div>
                <ShoppingBag className='size-6 cursor-pointer' strokeWidth={1.5} />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Carrinho de Compras</SheetTitle>
              </SheetHeader>
              <div className='grid grid-cols-2 gap-2 py-4'>
                {carrinho.map((item) => (
                  <div
                    key={item.id}
                    className='bg-white flex flex-col gap-2 p-6'
                  >
                    <img src={item.imagem} alt={item.nome} />
                    <span className='text-base font-bold'>{item.nome}</span>
                    <span className='text-2xl font-extrabold'>
                      R$ {item.preco.toFixed(2)}
                    </span>
                    <span className='text-sm'>
                      Quantidade: {item.quantidade}
                    </span>
                    <Button
                      className='bg-pink-600'
                      onClick={() => removerDoCarrinho(item.id)}
                    >
                      Remover
                    </Button>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                  <span className='text-base font-bold'>Valor Total:</span>
                  <span className='text-2xl font-extrabold'>
                    R$ {valorTotal.toFixed(2)}
                  </span>
                </div>
                <SheetClose asChild>
                  <Button className='bg-pink-600' type='submit'>
                    Finalizar compra
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          <Input
            className='h-8 w-64'
            placeholder='Buscar'
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <User2Icon strokeWidth={1.5} />
        </div>
      </div>

      {/* Produtos */}
      <div className='bg-stone-50 py-12'>
        <div className='w-10/12 mx-auto'>
          <span className='text-xl font-extrabold'>Selecionar itens</span>
          <hr />
          <div className="flex flex-wrap py-6 gap-4">
  {produtos.length > 0 ? (
    produtos
      .filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase())
      )
      .map((produto) => (
        <div
          key={produto.id}
          className="bg-white flex flex-col gap-3 p-6 shadow-sm"
        >
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full h-32 object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold">{produto.nome}</span>
            <span className="text-2xl font-extrabold">
              R$ {produto.preco.toFixed(2)}
            </span>
          </div>
          <Button
            className="bg-pink-600"
            onClick={() => adicionarAoCarrinho(produto)}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      ))
  ) : (
    <p className="text-gray-500 text-center w-full">Nenhum produto encontrado.</p>
  )}
</div>

        </div>
      </div>

      {/* Footer */}
      <div className='flex flex-col items-center justify-center py-16 bg-orange-950 gap-8'>
        <img src={LogoWhite} className='w-24' alt='Logo' />
        <nav className='flex gap-6 text-white text-sm'>
          <a href='#' className='hover:opacity-50'>
            Home
          </a>
          <a href='#' className='hover:opacity-50'>
            Categorias
          </a>
        
          <a href='#' className='hover:opacity-50'>
            Perfil
          </a>
        </nav>
      </div>
    </div>
  );
};

export default App;
