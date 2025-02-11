import './App.css'
import { Footer } from './components/Footer'
import { Dolar } from './components/Dolar'
import { UVA } from './components/UVA'

function App() {
  return (
    <>
      <main className="min-h-screen flex-col gap-4 flex items-center justify-center">
        <UVA></UVA>
        <Dolar></Dolar>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
