import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
    <Wrapper>    
        {tasks.length > 0 && (
            <>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Show" : "Hide"} finished tasks
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Mark all done
                </Button>
            </>
        )}
    </Wrapper>
)};

export default Buttons;