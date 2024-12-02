
import AddForm from "./AddForm"; 
import TodoList from "./TodoList"; 
import TodoListContextProvider from "./TodoListContextProvider";


function App ()
{
  return(
    <>
    <TodoListContextProvider >
    <AddForm></AddForm>
    <TodoList></TodoList>
    </TodoListContextProvider>
    
    </>
  )
}

export default App; 
 
