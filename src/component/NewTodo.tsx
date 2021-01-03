import React, {useRef} from 'react';

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        props.onAddTodo(enteredText);
    }

    return <form onSubmit={todoSubmitHandler}>
        <div className="form_control">
            <label htmlFor="todo_text">Things I need to do today??</label>   
            <input type="text" id="todo_text" ref={textInputRef}/>
        </div>
        <button type="submit">Add Todo</button>
    </form>
}

export default NewTodo;