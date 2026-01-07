import './App.css'
import date from './components/json/date.json'
import PageBoard from './components/PageBoard.jsx'

function App() {

  return (
    <>
      <PageBoard events={date}/>
    </>
  )
}

export default App
