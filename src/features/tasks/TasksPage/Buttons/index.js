import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { 
    toggleHideDone, 
    setAllDone, 
    selectAreTasksEmpty, 
    selectIsEveryTaskDone, 
    selectHideDone, 
} from "../../tasksSlice";

const Buttons = () => {
    // const { tasks, hideDone } = useSelector(selectTasksState);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const IsEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTasksEmpty > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Show" : "Hide"} finished tasks
                    </Button>
                    <Button
                        disabled={IsEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Mark all done
                    </Button>
                </>
            )}
        </Wrapper>
    )
};

export default Buttons;