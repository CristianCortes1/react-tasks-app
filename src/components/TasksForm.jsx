import React, { useRef } from "react";
import InputText from "./InputText";
import ButtonSubmit from "./ButtonSubmit";
import FormContainer from "./FormContainer";
import { useTasks } from "../context/TaskContext";
function TasksForm() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const { createTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    if (!title.trim() || !description.trim()) return;
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2 className="text-lg text-violet-600 font-bold">Create Task</h2>
      <InputText label={"Task Title"} inputRef={titleRef} autoFocus />
      <InputText
        label={"Task Description"}
        inputRef={descriptionRef}
        multiline
      />
      <ButtonSubmit>Create</ButtonSubmit>
    </FormContainer>
  );
}

export default TasksForm;
