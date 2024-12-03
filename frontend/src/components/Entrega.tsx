import { useState } from "react";
import { Check, CircleDollarSign, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Resumo } from "./Resumo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";

interface EntregaProps {
  carrinho: Array<{
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
  }>;
  setValorEntrega: React.Dispatch<React.SetStateAction<number>>;
  limparCarrinho: () => void;
  onEnviar: () => void;
}

export function Entrega({
  carrinho,
  setValorEntrega,
  onEnviar,
}: EntregaProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const valoresEntrega: Record<"PAC" | "SedexExpressa" | "Sedex", number> = {
    PAC: 6,
    SedexExpressa: 8,
    Sedex: 11,
  };

  const handleEntrega = () => {
    setIsDialogOpen(true); // Abre o Dialog
  };

  const confirmarEnvio = () => {
    setIsDialogOpen(false); // Fecha o Dialog
    onEnviar(); // Avança para a próxima etapa
  };

  return (
    <div className="bg-stone-50 py-12">
      <div className="w-7/12 pt-5 pb-12 mx-auto relative flex items-center justify-between">
        <div className="p-2 bg-orange-950 rounded-full z-10">
          <CircleDollarSign color="#ffffff" />
        </div>
        <div className="p-2 bg-orange-950 rounded-full z-10">
          <Truck color="#9a3412" />
        </div>
        <div className="p-2 bg-orange-950 rounded-full z-10">
          <Check color="#9a3412" />
        </div>
        <div className="w-full absolute h-2 bg-orange-950 z-0" />
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-2 gap-36">
        <div>
          <span className="text-xl font-extrabold">Entrega</span>
          <hr />
          <div className="flex flex-col gap-6 py-6">
            <RadioGroup
              defaultValue="PAC"
              onValueChange={(value) => {
                if (value in valoresEntrega) {
                  setValorEntrega(
                    valoresEntrega[value as keyof typeof valoresEntrega]
                  );
                }
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="PAC" id="r1" />
                <Label htmlFor="r1">PAC entrega padrão: R$ 6,00</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="SedexExpressa" id="r2" />
                <Label htmlFor="r2">Sedex expressa: R$ 8,00</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Sedex" id="r3" />
                <Label htmlFor="r3">Sedex 10: R$ 11,00</Label>
              </div>
            </RadioGroup>
            <Button className="bg-pink-600" onClick={handleEntrega}>
              Enviar
            </Button>
          </div>
        </div>

        {/* Resumo de Compra */}
        <Resumo
          carrinho={carrinho}
          setValorEntrega={setValorEntrega}
          onEnviar={onEnviar}
        />
      </div>

      {/* Dialog de Confirmação */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmação de Entrega</DialogTitle>
            <DialogDescription>
              A opção de entrega foi confirmada com sucesso!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Truck size={48} color="#9a3412" />
          </div>
          <DialogClose asChild>
            <Button className="bg-pink-600 w-full" onClick={confirmarEnvio}>
              Continuar
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
