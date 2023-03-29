import { handleAddTodo, handleDeleteTodo, handleToggle } from "../actions/todos";
import { useRef } from "react";
import List from "./List";
import { connect } from "react-redux";

const Todos = (props) => {
    const inputRef = useRef();
    const addItem = (e) => {
        e.preventDefault();
        props.dispatch(handleAddTodo(inputRef.current.value,
            () => inputRef.current.value = ""))
    };

    const removeItem = (todo) => {
        props.dispatch(handleDeleteTodo(todo));
    }

    const toggleItem = (id) => {
        props.dispatch(handleToggle(id));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add Todo" ref={inputRef} />
            <button onClick={addItem}>Add Todo</button>
            <List remove={removeItem} items={props.todos} toggle={toggleItem} />
        </div>
    )
}

export default connect((state) => ({
    todos: state.todos
}))(Todos);