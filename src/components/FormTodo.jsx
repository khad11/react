import { useState } from "react";
import { toast } from "react-hot-toast";
const FormTodo = ({ addTodo }) => {
  //use state()
  const [title, setTitle] = useState("");
  //handle sumbit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("This didn't work.");

      return;
    } else if (title.trim) {
      toast.success("You added ");
    }

    addTodo({
      id: Math.random(),
      title: title,
      completed: false,
    });
    setTitle("");
  };
  //   console.log(title);
  return (
    <form className="form-input" onSubmit={handleSubmit}>
      <lebel>
        <span className="input-title">Title: </span>
        <input
          type="text"
          placeholder="Please enter smth todo"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <button className="submit-btn">Qo'shish</button>
      </lebel>
    </form>
  );
};
export default FormTodo;
