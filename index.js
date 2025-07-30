const notesListElement = document.querySelector(".notes-list");
const noteSaveButtonElement = document.querySelector(".save");
const deleteButtonElement = document.querySelector(".delete");
const newNoteButtonElement = document.querySelector(".new-note-button");
const titleInputElmement = document.getElementById("note-title-input");
const contentTextInputElement = document.getElementById("text-area-content");

noteSaveButtonElement.addEventListener("click", clickSaveButton);
newNoteButtonElement.addEventListener("click", newNotes);
deleteButtonElement.addEventListener("click", clickDeleteButton);

displayNotesList();
applyListner();

function applyListner() {
  const noteEntriesElement = document.querySelectorAll(".note-entry-list");
  noteEntriesElement.forEach((noteEntry) => {
    noteEntry.addEventListener("click", () =>
      selectNote(noteEntry.getAttribute("data-id"))
    );
  });
}

function displayNotesList() {
  const notes = getNotes();
  const sortedNotes = notes.sort(
    (noteA, noteB) => noteB.lastUpdate - noteA.lastUpdate
  );

  let html = "";

  sortedNotes.forEach((note) => {
    html += `
      <div class="note-entry-list" data-id="${note.id}">
            <div class="note-entry-list-title">${escapeHtml(note.title)}</div>
            <div class="note-entry-list-content">${escapeHtml(
              note.content
            )}</div>
            <div class="note-entry-list-date">${new Date(
              note.lastUpdate
            ).toLocaleString("de-DE")}</div>
      </div> 
    `;
  });

  notesListElement.innerHTML = html;
}

function clickSaveButton() {
  const title = titleInputElmement.value;
  const content = contentTextInputElement.value;
  console.log(title, content);

  if (!title || !content) {
    alert("Bitte Titel und Inhalt eingeben!");
    return;
  }

  saveNotes(title, content, Number(getCurrentSelectedId()));

  titleInputElmement.value = "";
  contentTextInputElement.value = "";

  displayNotesList();
  applyListner();
}

function clickDeleteButton() {
  const currentlySelectedId = getCurrentSelectedId();

  if (!currentlySelectedId) return;

  deleteNote(currentlySelectedId);

  titleInputElmement.value = "";
  contentTextInputElement.value = "";

  displayNotesList();
  applyListner();
}

function selectNote(id) {
  const selectNoteElement = document.querySelector(
    `.note-entry-list[data-id="${id}"]`
  );

  if (selectNoteElement.classList.contains("curently-notes")) return;

  removeSelectedClassFromAllNotes();

  selectNoteElement.classList.add("curently-notes");

  const notes = getNotes();

  const selectedNote = notes.find((note) => note.id === Number(id));

  if (!selectedNote) return;

  titleInputElmement.value = selectedNote.title;
  contentTextInputElement.value = selectedNote.content;
}

function newNotes() {
  titleInputElmement.value = "";
  contentTextInputElement.value = "";

  removeSelectedClassFromAllNotes();
}

function removeSelectedClassFromAllNotes() {
  const noteEntriesElement = document.querySelectorAll(".note-entry-list");
  noteEntriesElement.forEach((noteEntry) => {
    noteEntry.classList.remove("curently-notes");
  });
}

function getCurrentSelectedId() {
  let currentId = undefined;

  const currentlySelectedNoteElement =
    document.querySelector(".curently-notes");

  if (currentlySelectedNoteElement) {
    currentId = currentlySelectedNoteElement.getAttribute("data-id");
  }

  return currentId;
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
