import NavBar from "./components/navbar/navbar"
import ItemListContainer from "./containers/itemlistcontainer/ItemListContainer"


function App() {

  return (
    <>
    <header className="bg-teal-700 drop-shadow-lg">
      <NavBar/>
    </header>
    <main className="bg-teal-700 h-full">
      <ItemListContainer greeting={'PRODUCTOS'}/>
    </main>
    </>
  )
}

export default App
