import AddNote from "../Components/AddNote";
import Note from "../Components/Note";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function NotesList() {
  const user = useSelector((state) => state.counter.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return (
    <div id="noteslist" className="gap-6  overflow-x-auto justify-around">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <AddNote />
    </div>
  );
}

export default NotesList;
