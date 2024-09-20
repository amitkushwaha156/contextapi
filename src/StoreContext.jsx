import { createContext ,useState} from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {

  const [obj,setobj]=useState([])

  const remove=()=>{
    console.log(45)
}


  return <MyContext.Provider value={{obj,setobj,remove}}>{children}</MyContext.Provider>;
};
