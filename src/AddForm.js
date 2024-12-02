import {useState} from "react"
import { useContext } from "react";
import {TodoContext} from "./TodoListContextProvider";

function AddForm ()
{
    const [ evalue, setEvalue] = useState("");
const {activityArr, setActivityArr} = useContext(TodoContext)

    function handleChange(e)
    {
        setEvalue(e.target.value);
    }

    function updateArr()
    {
        setActivityArr([...activityArr, evalue]);
        setEvalue("");
    }
    return (
        <div>
            <input type="text"  value={evalue} onChange={handleChange}/>
            <button onClick={updateArr}>Add</button>
        </div>
    )
}

export default AddForm;