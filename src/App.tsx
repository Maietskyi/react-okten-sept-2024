import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {
  return (
    <>
      <MyComponent text={'hello1'}/>
      <MyComponent text={'hello2'}/>
      <MyComponent text={'hello3'}/>
    {/*це те саме*/}
    {/*    {MyComponent({text:'hello2'})}*/}
    </>
  )
}

export default App;
