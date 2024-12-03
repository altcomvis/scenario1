import { ShoppingBag, User2Icon } from 'lucide-react';
import Logo from '../assets/logo.svg'; 
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

// Tipos para props
interface HeaderProps {
  carrinho: Array<{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
  }>;
  removerDoCarrinho: (id: number) => void;
  valorTotal: number;
  busca: string;
  setBusca: (value: string) => void;
  onFinalizarCompra: () => void; // Nova propriedade para finalizar compra
}

const Header = ({
  carrinho,
  removerDoCarrinho,
  valorTotal,
  busca,
  setBusca,
  onFinalizarCompra,
}: HeaderProps) => {
  return (
    <div className="bg-rose-100 h-24 flex justify-between items-center px-20">
      <div className="flex gap-20 items-center">
        <img src={Logo} className="w-24" alt="Logo" />
        <nav className="flex gap-6">
          <a href="/" className="hover:opacity-50">
            Home
          </a>
          <a href="#" className="hover:opacity-50">
            Categorias
          </a>
          <a href="#" className="hover:opacity-50">
            Perfil
          </a>
        </nav>
      </div>
      <div className="flex gap-4 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <div className="relative">
              <div className="absolute bg-black text-white rounded-full px-1 text-xs -top-2 -right-1 cursor-pointer">
                {carrinho.length}
              </div>
              <ShoppingBag className="size-6 cursor-pointer" strokeWidth={1.5} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Carrinho de Compras</SheetTitle>
            </SheetHeader>
            <div className="grid grid-cols-2 gap-2 py-4">
              {carrinho.map((item) => (
                <div
                  key={item.id}
                  className="bg-white flex flex-col gap-2 p-6"
                >
                  <img src={item.imagem} alt={item.nome} />
                  <span className="text-base font-bold">{item.nome}</span>
                  <span className="text-2xl font-extrabold">
                    R$ {item.preco.toFixed(2)}
                  </span>
                  <span className="text-sm">Quantidade: {item.quantidade}</span>
                  <Button
                    className="bg-pink-600"
                    onClick={() => removerDoCarrinho(item.id)}
                  >
                    Remover
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-base font-bold">Valor Total:</span>
                <span className="text-2xl font-extrabold">
                  R$ {valorTotal.toFixed(2)}
                </span>
              </div>
              <SheetClose asChild>
                <Button
                  className="bg-pink-600"
                  type="button"
                  onClick={onFinalizarCompra} // Transição para o fluxo de pagamento
                >
                  Finalizar compra
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Input
          className="h-8 w-64"
          placeholder="Buscar"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <User2Icon strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Header;
