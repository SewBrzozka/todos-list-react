import { useState, useRef } from "react";
import { Button, StyledForm } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const timmedNewTaskContent = newTaskContent.trim();

        if (!timmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: timmedNewTaskContent,
            done: false,
            id: nanoid(),
        }))

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