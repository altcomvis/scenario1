interface ResumoProps {
  carrinho: Array<{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
  }>;
  setValorEntrega: React.Dispatch<React.SetStateAction<number>>;
  onEnviar: () => void;
}

export function Resumo({ carrinho, setValorEntrega }: ResumoProps) {
  const calcularTotal = () => {
    const totalProdutos = carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
    const valorEntrega = 6; // Exemplo: ajuste conforme necessário
    setValorEntrega(valorEntrega);
    return totalProdutos + valorEntrega;
  };

  return (
    <div>
      <span className="text-xl font-extrabold">Resumo</span>
      <hr />
      <div className="py-6 flex flex-col gap-3">
        {carrinho.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <img
              src={item.imagem}
              alt={item.nome}
              className="h-12 w-auto object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold">{item.nome}</span>
              <span className="text-sm font-extrabold">
                R$ {item.preco.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <hr/>
      <div className="flex flex-col pt-4">
        <span className="text-base font-bold">Valor Total:</span>
        <span className="text-2xl font-extrabold">
          R$ {calcularTotal().toFixed(2)}
        </span>
       
      </div>
    </div>
  );
}
