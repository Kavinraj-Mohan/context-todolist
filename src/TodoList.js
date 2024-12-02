import { useContext} from "react";
import { TodoContext } from "./TodoListContextProvider";

function TodoList(){
    const {activityArr} = useContext(TodoContext);

    return (
        <div>
            <h2>Your Todo List:</h2>
            {activityArr.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )

}

export default TodoList;
