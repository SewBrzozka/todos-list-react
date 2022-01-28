import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHideDone} className="buttons__button">
                {hideDone ? "Show" : "Hide"} finished tasks
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Mark all done
            </button>
        </div>
    )
);

export default Buttons;