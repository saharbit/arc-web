import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { supabase } from "../../utils/supabaseClient";

const Tasks = () => {
  const [inputValue, setInputValue] = useState("");
  const { status, data, error, isFetching } = useQuery("tasks", async () => {
    const res = await axios.get("/api/tasks");
    return res.data;
  });

  async function createTask() {
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ task: inputValue }]);
  }

  function onSubmit() {
    createTask();
  }

  return (
    <div>
      {data?.map((task) => (
        <div key={task.id}>{task.task}</div>
      ))}
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={onSubmit}>Add</button>
    </div>
  );
};

export default Tasks;
