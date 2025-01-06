import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {
  return (
    <>
      <MyComponent text={'hello1'}/>
    {/*це те саме*/}
    {/*    {MyComponent({text:'hello2'})}*/}
    </>
  )
}

export default App
