import NavBar from "./components/navbar/navbar"
import ItemListContainer from "./containers/itemlistcontainer/ItemListContainer"
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <header className="bg-teal-700 drop-shadow-lg">
          <NavBar/>
        </header>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'PRODUCTOS'}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
