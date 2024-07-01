import './App.css'
import RedButton from './RedButton'
import ClickCounter from './ClickCounter'

function App() {

  let playerName = "Scott" //this is a normal variable that will not update/change
 
//const statValues = useState(0) //this variable is dynamic, react will detects if it changes and update the page
//const count = statValues[0] //the value of useState
// const setCount = statValues[1] //the function of useState
//you can also make states shorter with 1 liners using destructuring


  return (
    <>
      <p>Hello, {playerName}</p>
      <ClickCounter/>
      <RedButton message='Click me' consoleMsg = "first button"/>
      <RedButton message='Another button' consoleMsg = "second button"/>
    </>
  )
}

export default App
