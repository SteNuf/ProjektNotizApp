const LOCALE_STORAGE_KEY = "notices-app";

function getNotes() {
  return JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY)) || [];
}

function saveNotes(title, content, id = undefined) {
  const notes = getNotes();

  //Hier zählt auch NaN als false!
  if (!id) {
    notes.push({
      title,
      content,
      id: getNextId(),
      lastUpdate: new Date().getTime(),
    });
  } else {
    const indexOfNoteWithId = notes.findIndex((note) => note.id === id);

    if (indexOfNoteWithId > -1) {
      notes[indexOfNoteWithId] = {
        title,
        content,
        id,
        lastUpdate: new Date().getTime(),
      };
    }
  }

  localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(notes));
}

function deleteNote(id) {
  if (!id) return;

  const notes = getNotes();

  const filteredNotes = notes.filter((note) => note.id !== Number(id));

  localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(filteredNotes));
}

function getNextId() {
  const notes = getNotes();

  const sortedNotes = notes.sort((noteA, noteB) => noteA.id - noteB.id);

  let nextId = 1;

  for (let note of sortedNotes) {
    if (nextId < note.id) break;

    nextId = note.id + 1;
  }

  return nextId;
}
