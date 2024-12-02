import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext();
function TodoListContextProvider(data)
{
    const [activityArr, setActivityArr] = useState(["Apple", "Orange"])

    return(
        <TodoContext.Provider value={{activityArr, setActivityArr}}>
         {data.children}
        </TodoContext.Provider>
        

    )
}

export default TodoListContextProvider;

export {TodoContext}