import './App.css'
import SinglePage from './components/SinglePage'

function App() {

  return (
  <div className='bg-black '>
    <div className="relative min-h-screen w-full ">
      <div className="absolute inset-0 bg-[url('/public/money.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="relative flex flex-col items-center h-full text-white p-15">
        <SinglePage />
      </div>
    </div>
    </div>  
  )
}

export default App
