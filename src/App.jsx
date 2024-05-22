import NavBar from "./components/navbar/navbar"
import ItemListContainer from "./containers/itemlistcontainer/itemlistcontainer"


function App() {

  return (
    <>
    <header className="bg-teal-700 drop-shadow-lg">
      <NavBar></NavBar>
    </header>
    <main className="bg-teal-700 h-screen">
      <ItemListContainer greeting={'PROXIMAMENTE'}></ItemListContainer>
    </main>
    </>
  )
}

export default App
