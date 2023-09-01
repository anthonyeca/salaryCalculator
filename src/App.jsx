import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Parragraph } from './components/Parragraph'
import { Title } from './components/Title'

function App() {
  return (
    <div className="w-screen h-screen bg-[#0a0e0f] text-[#EAEEF1] ">
      <Title />
      <Parragraph />
      <Form />
      <Footer />
    </div>
  )
}

export default App
