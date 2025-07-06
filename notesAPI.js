const LOCALE_STORAGE_KEY = "notices-app";

function getNotes() {
  return JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY)) || [];
}

function saveNotes(title, content) {
  const notes = getNotes();

  notes.push({
    title,
    content,
    id: getNextId(),
    lastUpdate: new Date().getTime(),
  });

  localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(notes));
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
