import { useState } from 'react'
import axios from 'axios'
import { Button } from './ui/button'

const AddPedido = ({ onAdd }: { onAdd: () => void }) => {
  const [vendedor, setVendedor] = useState('')
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState<number | ''>('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/pedidos`, {
        vendedor,
        produto,
        quantidade: Number(quantidade),
        status,
      })
      onAdd() // Atualiza a lista de pedidos
      setVendedor('')
      setProduto('')
      setQuantidade('')
      setStatus('')
    } catch (error) {
      console.error('Erro ao adicionar pedido:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md">
      <input
        type="text"
        placeholder="Vendedor"
        value={vendedor}
        onChange={e => setVendedor(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Produto"
        value={produto}
        onChange={e => setProduto(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={e =>
          setQuantidade(e.target.value === '' ? '' : Number(e.target.value))
        }
        className="block w-full mb-2 p-2 border rounded"
        required
      />

      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={e => setStatus(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
        required
      />
      <Button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Adicionar
      </Button>
    </form>
  )
}

export default AddPedido
