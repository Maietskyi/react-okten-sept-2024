import './App.css'
import {simpsons} from "./data/simsonList.ts";
import MySimpson from "./components/my-person/My-simpson.tsx";

function App() {
    return (
    <>
        {
            simpsons.map((simpson,index)=> <MySimpson key={index} simpson={simpson}/>
            )
        }
    </>
  )
}

export default App;
