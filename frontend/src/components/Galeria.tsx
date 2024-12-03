import { Button } from './ui/button';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

interface GaleriaProps {
  produtos: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
}

const Galeria = ({ produtos, adicionarAoCarrinho }: GaleriaProps) => {
  return (
    <div className="bg-stone-50 py-12">
      <div className="w-10/12 mx-auto">
        <span className="text-xl font-extrabold">Selecionar itens</span>
        <hr />
        <div className="flex flex-wrap py-6 gap-4">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white flex flex-col gap-3 p-6">
              <img src={produto.imagem} alt={produto.nome} className="h-48 w-auto mx-auto object-cover" />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
