import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { GrUndo } from "react-icons/gr";

// Moved outside the App function
const storedTasks = () => {
  let task = localStorage.getItem("tasks");

  if (task) {
    return JSON.parse(task);
  } else {
    return [];
  }
};

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(storedTasks());
  const [showCompleted, setShowCompleted] = useState(false);
  const [date, setDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    setDate(formattedDate);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (title && description) {
      if (isEditing) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? { ...task, title, description } : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { title, description, completed: false }]);
      }
      setTitle("");
      setDescription("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setIsEditing(true);
    setEditIndex(index);
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="bg-stone-950 text-white max-h-auto h-auto flex flex-col items-center p-5 md:p-10">
      <div className="flex flex-row mt-10">
        <h1 className="font-bold text-2xl">Todo</h1>
        <h1 className="text-orange-500 font-bold text-2xl">App</h1>
      </div>
      <div className="h-40 flex flex-row items-center border-gray-500 border-2 bg-stone-950 rounded-md p-5 mt-3 max-w-sm w-full justify-between">
        <div className="flex flex-col items-center ml-5">
          <h6 className="text-orange-500 font-bold text-2xl">{date}</h6>
          <h1 className="text-white font-bold text-md">Todos Done</h1>
        </div>
        <div className="bg-orange-500 rounded-full p-5 mr-4">
          <h1 className="text-black font-bold text-xl bg-orange-500">
            {completedTasksCount}/{tasks.length}
          </h1>
        </div>
      </div>

      <div className="border-gray-500 border-2 p-8 rounded-lg mt-5 mb-9 w-full max-w-sm">
        <div className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              placeholder="Add Task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded-lg bg-[#2c2c2c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <input
              type="text"
              placeholder="Add Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded-lg bg-[#2c2c2c] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            onClick={addTask}
            className="w-full bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-600"
          >
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </div>
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setShowCompleted(false)}
            className={`px-4 py-2 rounded-lg ${
              !showCompleted ? "bg-orange-500 text-black" : "bg-gray-600"
            }`}
          >
            Todo
          </button>
          <button
            onClick={() => setShowCompleted(true)}
            className={`px-4 py-2 rounded-lg ${
              showCompleted ? "bg-orange-500 text-black" : "bg-gray-600"
            }`}
          >
            Completed
          </button>
        </div>
        <div>
          {tasks
            .filter((task) => task.completed === showCompleted)
            .map((task, index) => (
              <div
                key={index}
                className="bg-[#2c2c2c] p-4 rounded-lg mb-4 flex justify-between items-center"
              >
                <div className="flex items-center bg-[#2c2c2c] overflow-hidden">
                  <div>
                    <h1 className="text-xl font-bold bg-[#2c2c2c] ">
                      {task.title}
                    </h1>
                    <p className="bg-[#2c2c2c]">{task.description}</p>
                  </div>
                </div>
                <div className="flex space-x-2 bg-[#2c2c2c]">
                  <button
                    onClick={() => toggleTaskCompletion(index)}
                    className=" text-green font-bold text-xl py-1 px-1 bg-[#2c2c2c]"
                  >
                    {task.completed ? (
                      <GrUndo className="bg-[#2c2c2c]" />
                    ) : (
                      <FaCheck className="bg-[#2c2c2c]" />
                    )}
                  </button>
                  <button
                    onClick={() => editTask(index)}
                    className="text-white font-bold text-xl py-1 px-1 bg-[#2c2c2c]"
                  >
                    <FaRegEdit className="bg-[#2c2c2c]" />
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className=" text-white font-bold text-xl py-1 px-1 bg-[#2c2c2c]"
                  >
                    <MdDeleteOutline className="bg-[#2c2c2c]" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
