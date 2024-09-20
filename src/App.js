import { useContext,useState } from "react";
import { MyContext } from "./StoreContext";
import "./styles.css";

export default function App() {

const [Num,setNum]=useState()

  // const{obj} = useContext(MyContext);

  const handleAdd=(e)=>{
    (e.key==="Enter")
    {
      const newVal=e.target.value
     
      Num((prev) => [...prev, newVal]);
       

    }
 
    console.log(Num)
  }
 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* {obj.map((item,index) => (
        <span key={index} > {item} </span>
      ))} */}

      <input type="number" value={Num} onChange={(e) => setNum(e.target.value)}  onKeyUp={handleAdd}  />
    </div>
  );
}
