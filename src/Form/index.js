import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const timmedNewTaskContent = newTaskContent.trim();

        if (!timmedNewTaskContent) {
            return;
        }

        addNewTask(timmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="What you have to do?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Add new task</button>
        </form>
    );
};

export default Form;