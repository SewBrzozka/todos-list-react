import { useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import { fetchExampleTasks } from "../../tasksSlice";

const ButtonExampleTasks = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Wrapper>
                <Button onClick={() => dispatch(fetchExampleTasks())}>
                    Add simple tasks
                </Button >
            </Wrapper>
        </>
    );
};

export default ButtonExampleTasks;