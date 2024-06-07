import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../utils/TodoSlice";
const Todo = ()=>{
    const [name,setName] = useState("");
    const dispatch = useDispatch();
    const changeHandler = (e)=>{
        setName(e.target.value);
    }
    const addHandler =()=>{
        dispatch(addItem(name));
    }
    const TodoData = useSelector((store) => store.todoReducer.items); 
    const inpRef = useRef(null);
    console.log(inpRef.current.value,"referenceInput");
    return(
        <>
            <div className="todo">
                <h1>Todo</h1>
                <input type="text" onChange={changeHandler}/>
                <input type="text" ref={inpRef}/>
                <button onClick={addHandler}>Add</button>
                {TodoData.length > 0?TodoData.map((ele,index)=>{
                    return(
                        <div key={index}>
                            <span>{ele}</span>
                        </div>
                    )
                }):"No list added"}
            </div>
        
        </>
    )
}
export default Todo;