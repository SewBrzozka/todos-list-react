import { useState, useRef } from "react";
import { Button, StyledForm, Input } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const timmedNewTaskContent = newTaskContent.trim();

        if (!timmedNewTaskContent) {
            return;
        }

        addNewTask(timmedNewTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="What you have to do?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Add new task
            </Button>
        </StyledForm>
    );
};

export default Form;