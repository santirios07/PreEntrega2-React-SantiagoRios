import NavBar from "./components/navbar/NavBar"
import ItemListContainer from "./containers/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from "./containers/itemdetailcontainer/ItemDetailContainer"
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/products/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
