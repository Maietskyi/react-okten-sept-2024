import './App.css'
import {UserCardsList} from "./components/user-car-list/UserCardsList.tsx";
import {FC, useState} from "react";

const App:FC=()=> {
    const [isOpen, setIsOpen] =useState<boolean>(true);
    const [listLength, setListLength]=useState<number>()
    return (
        <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            Home
            <input type="number" value={listLength} onChange={(event)=>
                setListLength(Number(event.target.value))}/>
            <div style={{height:'600px'}}>{isOpen && <UserCardsList listLength={listLength}/>}</div>
            <button onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
        </div>
    )
}

export default App
