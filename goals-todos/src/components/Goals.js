
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import { useRef } from "react";
import List from "./List";
import { connect } from "react-redux";

const Goals = (props) => {
    const inputRef = useRef();
    const addGoal = (e) => {
        e.preventDefault();
        props.dispatch(handleAddGoal(
            inputRef.current.value,
            () => inputRef.current.value = ""
        ))
    }

    const removeItem = (goal) => {
        props.dispatch(handleDeleteGoal(goal));
    }

    console.log("goal: " + props.goals)

    return (
        <div>
            <h1>Goals</h1>
            <input type="text" placeholder="Add Goal" ref={inputRef} />
            <button onClick={addGoal}>Add Goal</button>
            <List remove={removeItem} items={props.goals} />
        </div>
    )
}

export default connect((state) => ({
    goals: state.goals
}))(Goals);