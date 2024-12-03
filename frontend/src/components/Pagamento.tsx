import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Resumo } from "./Resumo";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";

interface PagamentoProps {
  carrinho: Array<{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
  }>;
  valorEntrega: number;
  removerDoCarrinho: (id: number) => void;
  onAvancar: () => void; // Função chamada ao concluir pagamento
  setValorEntrega: React.Dispatch<React.SetStateAction<number>>;
}

const Pagamento = ({
  carrinho,
  onAvancar,
  setValorEntrega,
}: PagamentoProps) => {
  const [formData, setFormData] = useState({
    nome: "",
    numero: "",
    validade: "",
    cvv: "",
  });

  const [isPixOpen, setIsPixOpen] = useState(false);

  // Atualizar os campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validar os dados e processar o pagamento
  const handlePagamento = () => {
    if (!formData.nome || !formData.numero || !formData.validade || !formData.cvv) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    alert("Pagamento com cartão realizado com sucesso!");
    onAvancar(); // Avança para a próxima etapa (ex.: entrega)
  };

  return (
    <div className="bg-stone-50 py-12">
      <div className="w-10/12 mx-auto grid grid-cols-2 gap-36">
        {/* Formulário de Pagamento */}
        <div>
          <span className="text-xl font-extrabold">Pagamento</span>
          <hr />
          <div className="flex flex-col gap-2 py-6">
            <Input
              placeholder="Nome (como no cartão)"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Número do cartão"
              name="numero"
              maxLength={16}
              value={formData.numero}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Data de validade"
              name="validade"
              maxLength={5}
              value={formData.validade}
              onChange={handleInputChange}
            />
            <Input
              placeholder="CVV"
              name="cvv"
              maxLength={3}
              value={formData.cvv}
              onChange={handleInputChange}
            />
            <Button className="bg-pink-600" onClick={handlePagamento}>
              Pagar com Cartão
            </Button>
            <hr />
            {/* Botão para PIX */}
            <Dialog open={isPixOpen} onOpenChange={setIsPixOpen}>
              <DialogTrigger asChild>
                <Button className="bg-green-600">Pagar com PIX</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Pagamento via PIX</DialogTitle>
                  <DialogDescription>
                    Escaneie o QRCode abaixo para completar o pagamento:
                  </DialogDescription>
                </DialogHeader>
                {/* Substitua pelo QRCode desejado */}
                <div className="flex justify-center py-4">
                  <img
                    src="/path/to/qrcode.png"
                    alt="QR Code PIX"
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <DialogClose asChild>
                  <Button className="bg-pink-600 w-full" onClick={onAvancar}>
                    Continuar
                  </Button>
                </DialogClose>
              </DialogContent>
            </Dialog>
          </div>
        </div>

      
        <Resumo
          carrinho={carrinho}
          setValorEntrega={setValorEntrega}
          onEnviar={onAvancar}
        />
      </div>
    </div>
  );
};

export default Pagamento;
