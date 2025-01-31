import {useState} from "react";

const useCounter = (stock) => {
const [count, setCount] = useState(1)
const add = () =>{
    if (count < stock){
        setCount(count + 1)
    }
}
const sustract = () => {
    if (count > 0){
        setCount(count - 1)
    }
   
}
return {count, add, sustract}
}

export default useCounter