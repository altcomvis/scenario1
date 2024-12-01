import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import AddPedido from './components/add-pedido'
import EditPedido from './components/edit-pedido'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface Pedido {
  id: number
  vendedor: string
  produto: string
  quantidade: number
  status: string
}

const App = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([])
  const [pedidoParaEditar, setPedidoParaEditar] = useState<Pedido | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const fetchPedidos = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pedidos`
      )
      setPedidos(response.data)
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error)
    }
  }

  const onDelete = async (id: number) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/pedidos/${id}`)
      fetchPedidos() // Atualiza a lista após exclusão
    } catch (error) {
      console.error('Erro ao excluir pedido:', error)
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetchPedidos()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-xl md:text-3xl font-bold">Lista de Pedidos</h1>
        <Dialog
          open={isDialogOpen}
          onOpenChange={isOpen => setIsDialogOpen(isOpen)}
        >
          <DialogTrigger asChild>
            <Button variant="outline">Adicionar Pedido</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Pedido</DialogTitle>
            </DialogHeader>
            <AddPedido
              onAdd={() => {
                axios
                  .get(`${import.meta.env.VITE_API_URL}/pedidos`)
                  .then(response => setPedidos(response.data))
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ul className="bg-white shadow-md rounded p-4">
      {pedidos.length > 0 ? (
    pedidos.map((pedido) => (
          <li
            key={pedido.id}
            className="border-b text-xs md:text-base p-2 flex justify-between items-center"
          >
            <span>
              <strong>{pedido.vendedor}</strong> - {pedido.produto} (
              {pedido.quantidade}) - {pedido.status}
            </span>
            <div className="flex gap-2">
              <Dialog
                open={pedidoParaEditar === pedido} // Garante que apenas o modal correto será aberto
                onOpenChange={isOpen => {
                  if (!isOpen) {
                    setPedidoParaEditar(null) // Reseta o estado ao fechar
                  }
                }}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={() => setPedidoParaEditar(pedido)} className='text-xs'
                  >
                    Editar
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Editar Pedido</DialogTitle>
                  </DialogHeader>
                  {pedidoParaEditar && (
                    <EditPedido
                      pedido={pedidoParaEditar}
                      onEdit={fetchPedidos} // Atualiza a lista após edição
                      onClose={() => setPedidoParaEditar(null)} // Fecha o modal e reseta o estado
                    />
                  )}
                </DialogContent>
              </Dialog>
              <Button variant="destructive"
                onClick={() => onDelete(pedido.id)}
                className="text-xs"
              >
                Excluir
              </Button>
            </div>
          </li>
       ))
      ) : (
        <p className="text-gray-500 text-center">Lista vazia</p>
      )}
      </ul>
    </div>
  )
}

export default App
