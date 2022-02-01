import Form from "./Form"
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";

function Tasks() {

  // const {
  //   // tasks,
  //   removeTask,
  //   toggleTaskDone,
  //   setAllDone,
  //   addNewTask,
  // } = useTasks();

  return (
    <Container>
      <Header
        title="To-do List"
      />
      <Section
        title="Add new task"
        body={<Form />}
      />

      <Section
        title="Task list:"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
