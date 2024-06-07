import { useSelector } from "react-redux";
import Todo from "./todoComponent/todo";
const Contact=()=>{
return(
        <div className="contactus">
            <h1>Hello, this is contact us page</h1>
            <Todo/>
        </div>
    )
}
export default Contact;