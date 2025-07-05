const LOCALE_STORAGE_KEY = "notices-app";

function getNotes() {
  return JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY)) || [];
}

function saveNotes(title, content) {
  const notes = getNotes();

  notes.push({
    title,
    content,
    id:"hallo",
    lastUpdate: new Date().getTime(),
  });
  
localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(notes));

}
