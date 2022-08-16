import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

interface AreaProps{
  onCreate: (title: string, content: string) => void;
}

function CreateArea({onCreate}: AreaProps) {
  const [noteObj, setNoteObj] = React.useState({
    title: "",
    content: "",
  });

  const [isOpen, setIsOpen] = React.useState(false);

  function handleChanges(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setNoteObj((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(e) => {
          onCreate(noteObj.title, noteObj.content);
          setNoteObj({ title: "", content: "" });
          e.preventDefault();
        }}
      >
        <input
          onChange={handleChanges}
          onFocus={() => setIsOpen((prevState) => !prevState)}
          name="title"
          placeholder={isOpen ? "Title" : "Make a note ..."}
          value={noteObj.title}
        />
        {isOpen && (
          <textarea
            onChange={handleChanges}
            name="content"
            placeholder="Take a note..."
            rows={3}
            value={noteObj.content}
          />
        )}
        <Zoom in={isOpen}>
          <Fab type="submit" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
