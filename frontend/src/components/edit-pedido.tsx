import { useState } from 'react'
import axios from 'axios'
import { Button } from './ui/button'

interface Pedido {
  id: number
  vendedor: string
  produto: string
  quantidade: number
  status: string
}

interface EditPedidoProps {
  pedido: Pedido
  onEdit: () => void // Função para atualizar a lista no App
  onClose: () => void // Função para fechar o formulário de edição
}

const EditPedido = ({ pedido, onEdit, onClose }: EditPedidoProps) => {
  const [vendedor, setVendedor] = useState(pedido.vendedor)
  const [produto, setProduto] = useState(pedido.produto)
  const [quantidade, setQuantidade] = useState<number | ''>(pedido.quantidade)
  const [status, setStatus] = useState(pedido.status)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/pedidos/${pedido.id}`, {
        vendedor,
        produto,
        quantidade: Number(quantidade),
        status,
      })
      onEdit() // Atualiza a lista após a edição
      onClose() // Fecha o formulário de edição
    } catch (error) {
      console.error('Erro ao editar pedido:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4">
        <span className="block text-gray-700">Vendedor</span>
        <input
          type="text"
          value={vendedor}
          onChange={e => setVendedor(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <span className="block text-gray-700">Produto</span>
        <input
          type="text"
          value={produto}
          onChange={e => setProduto(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <span className="block text-gray-700">Quantidade</span>
        <input
          type="number"
          value={quantidade}
          onChange={e => setQuantidade(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <span className="block text-gray-700">Status</span>
        <input
          type="text"
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="flex justify-between">
        <Button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Salvar
        </Button>
        <Button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          Cancelar
        </Button>
      </div>
    </form>
  )
}

export default EditPedido
