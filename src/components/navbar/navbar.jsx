import CartWidget from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button} from '@nextui-org/react'

const NavBar = () => {

  return (
    <nav className="bg-teal-700 drop-shadow-lg">
      <div className='flex justify-between items-center w-full py-3 px-10 font-ubuntu text-white'>
        <Link className='flex flex-grow basis-0 ' to={"/"}>
          <h2 className='text-lg hover:scale-105 hover:text-gray-300 duration-150'>Mar Indumentaria</h2>
        </Link>
        <div className='flex flex-grow basis-0 gap-4 text-lg justify-center'>
            <Button as={Link} to={"/"}>
              Inicio
            </Button>
            <Dropdown>
              <DropdownTrigger>
                <Button className='font-ubuntu '>
                  Categorias
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Categorias de productos'>
                <DropdownItem as={Link} to={"/category/buzos"} key="buzos">
                   Buzos
                </DropdownItem>
                <DropdownItem as={Link} to={"/category/pantalones"}  key="pantalones">
                   Pantalones
                </DropdownItem>
                <DropdownItem as={Link} to={"/category/sweaters"}  key="sweaters">
                   Sweaters
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
        </div>
          <CartWidget/>
      </div>
    </nav>
  )
}

export default NavBar