import React from "react"
import { Todos } from "../types/Type"

type Props ={
    todos: Todos[]
}


const Message: React.FC<Props> = ({todos}) =>  {
    return(
        <div>
           {
            todos.map((todo, i) => (
                <div key={i}>{todo.message} - <span style={{cursor: 'pointer'}}></span><div/>
            ))
           }
        </div>

    )
}
export default Message