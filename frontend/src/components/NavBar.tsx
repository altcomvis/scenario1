import Item from "../assets/cupcake1.png";
import { Sheet, ShoppingBag, User2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet";
import Logo from './assets/logo.svg';
export function NavBar (){
  return(
    <div className='bg-rose-100 h-24 flex justify-between items-center px-20'>
    <div className='flex gap-20 items-center'>
      <img src={Logo} className='w-24' alt='Logo' />
      <nav className='flex gap-6'>
      <a href='#' className='hover:opacity-50'>Home</a>
      <a href='#' className='hover:opacity-50'>Categorias</a>
      <a href='#' className='hover:opacity-50'>Carrinho</a>
      <a href='#' className='hover:opacity-50'>Perfil</a>
      </nav>
    </div>
    <div className='flex gap-4 items-center'>
    <Sheet>
      <SheetTrigger asChild>
      <div className='relative'>
  <div className='absolute bg-black text-white rounded-full  px-1  text-xs -top-2 -right-1 cursor-pointer'>10</div>
  <ShoppingBag className='size-6 cursor-pointer' strokeWidth={1.5}/>
</div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho de Compras</SheetTitle>
        </SheetHeader>
       
        <div className='grid grid-cols-2 grow-0 py-4 gap-2'>
        <div className='bg-white flex flex-col gap-2 p-6'>
          <img src={Item} alt='Item 1' />
          <span className='text-base font-bold'>CupCake Baunilha</span>
          <span className='text-2xl font-extrabold'>R$ 12,00</span>
          <Button className='bg-pink-600'>Remover</Button>
      </div>
        </div>
        <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <span className='text-base font-bold'>Valor Total:</span>
          <span className='text-2xl font-extrabold'>R$ 36,00</span>
        </div>
          <SheetClose asChild>
            <Button className='bg-pink-600' type="submit">Finalizar compra</Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>

<Input className='h-8 w-64' placeholder='Buscar'/>
<User2Icon strokeWidth={1.5}/>
    </div>
  </div>
  )
}