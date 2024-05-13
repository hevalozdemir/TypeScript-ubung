import React from "react"


type IProps = {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addMessage : () => void
}


const Input: React.FC<IProps> = ({ todo, setTodo, addMessage }) => {
    return (
        <div>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder="Bitte schreiben"
            />
            <button onClick={addMessage} > GET </button>
        </div>
    )
}

export default Input