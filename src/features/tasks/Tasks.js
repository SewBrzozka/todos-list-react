import Form from "./Form"
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import { useTasks } from "../../useTasks";

function Tasks() {

  const {
    // tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header
        title="To-do List"
      />
      <Section
        title="Add new task"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Task list:"
        body={
          <TasksList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
