import React from 'react';
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';

interface noteData {
  id: number;
  title: string;
  content:string;
}

function App() {
  const [noteItems, setNoteItems] = React.useState<noteData[]>([]);

  const createNoteItem = (inputTitle: string, inputContent: string) => {
    let newItem = {
      id: noteItems.length,
      title: inputTitle,
      content: inputContent,
    };
    setNoteItems((prevList) => [...prevList, newItem]);
  }

  function createNote(noteItem: noteData) {
    return (
      <Note
        key={noteItem.id}
        id={noteItem.id}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
    );
  }

  function deleteNote(id: number) {
    setNoteItems((prevList) => prevList.filter((element) => element.id !== id));
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onCreate={createNoteItem} />
      {noteItems.map(createNote)}
    </div>
  );
}

export default App;
