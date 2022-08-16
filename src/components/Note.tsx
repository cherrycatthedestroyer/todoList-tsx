import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface NoteProps{
  key: number
  id: number;
  title: string;
  content: string;
  onDelete: (key: number) => void;
}

function Note({id, title, content, onDelete}: NoteProps) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
