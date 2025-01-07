import './App.css'
import MyComponent from "./components/MyComponent.tsx";

function App() {
  return (
    <>
      <MyComponent title={'hello1'}>
          Lorem ipsum dolor sit amet.
      </MyComponent>
      <MyComponent title={'hello2'}/>
      <MyComponent title={'hello3'}/>
    {/*це те саме*/}
    {/*    {MyComponent({text:'hello2'})}*/}
    </>
  )
}

export default App;
