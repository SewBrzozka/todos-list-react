import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Button } from "./styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const ButtonExampleTasks = () => {
    const loading = useSelector(selectLoading)
    const dispatch = useDispatch();

    return (
        <>
            <Wrapper>
                <Button
                    onClick={() => dispatch(fetchExampleTasks())}
                    disabled={loading}
                >
                    {loading
                        ? "Downloading..."
                        : "Add simple tasks"
                    }
                </Button >
            </Wrapper>
        </>
    );
};

export default ButtonExampleTasks;