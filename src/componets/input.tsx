import React from "react"


type IProps = {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addMessage: () => void
}


const Input: React.FC<IProps> = ({ todo, setTodo, addMessage }) => {
    return (
        <div>
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                placeholder="Bitte geben Sie einen Benutzernamen ein!"
            />
            <button onClick={addMessage} > ADD </button>
        </div>
    )
}

export default Input