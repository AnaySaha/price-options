
import './App.css'
import Navbar from './components/Navbar/Navbar'
import DaisyNav from './components/DaisyNav'
import Feature from './components/Feature/Feature'
import { LineChart } from 'recharts'

function App() {
  // eslint-disable-next-line no-empty-pattern, no-undef
  const [] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    
    <DaisyNav></DaisyNav>
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      
     <PriceOptions></PriceOptions>
     <Feature></Feature>
     <LineChart dataKey={"math"}></LineChart>
    </>
  )
}

export default App

