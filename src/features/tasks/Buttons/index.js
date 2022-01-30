import { Wrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Wrapper>    
        {tasks.length > 0 && (
            <>
                <Button onClick={toggleHideDone}>
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
);

export default Buttons;