import NavBar from "./components/navbar/navbar"
import ItemListContainer from "./containers/itemlistcontainer/itemlistcontainer"
import Contador from "./components/contador/contador"

function App() {

  return (
    <>
    <header className="bg-white drop-shadow-md">
      <NavBar></NavBar>
    </header>
    <ItemListContainer greeting={'Bienvenidos a nuestra Tienda'}></ItemListContainer>
    <Contador></Contador>
    </>
  )
}

export default App
