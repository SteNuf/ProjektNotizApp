const notesListElement = document.querySelector(".notes-list");
const noticeSaveButtonElement = document.querySelector(".save");
const newNoteButtonElement = document.querySelector(".new-notice-button");
const titleInputElmement = document.getElementById("notice-title-input");
const contentTextInputElement = document.getElementById("text-area-content");

noticeSaveButtonElement.addEventListener("click", clickSaveButton);
newNoteButtonElement.addEventListener("click", newNotes);

displayNotesList();
applyListner();

function applyListner() {
  const noteEntriesElement = document.querySelectorAll(".notice-entry-list");
  noteEntriesElement.forEach((noteEntry) => {
    noteEntry.addEventListener("click", () =>
      selectNote(noteEntry.getAttribute("data-id"))
    );
  });
}

/*
function noticeSaveButton() {
  console.log("Hallo");
}*/

function displayNotesList() {
  const notes = getNotes();

  const sortedNotes = notes.sort(
    (noteA, noteB) => noteB.lastUpdate - noteA.lastUpdate
  );

  let html = "";

  sortedNotes.forEach((note) => {
    html += `
    <div class="notice-entry-list" data-id="${note.id}">
            <div class="notice-entry-list-title">${note.title}</div>
            <div class="notice-entry-list-content">${note.content}</div>
            <div class="notice-entry-list-date">${new Date(
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

  let currentId = undefined;

  const currentlySelectedNoteElement = document.querySelector(
    ".select-actuality-notes"
  );

  if (currentlySelectedNoteElement) {
    currentId = currentlySelectedNoteElement.getAttribute("data-id");
  }

  saveNotes(title, content, Number(currentId));

  titleInputElmement.value = "";
  contentTextInputElement.value = "";

  displayNotesList();
  applyListner();
}

function selectNote(id) {
  const selectNoteElement = document.querySelector(
    `.notice-entry-list[data-id="${id}"]`
  );

  if (selectNoteElement.classList.contains("select-actuality-notes")) return;

  removeSelectedClassFromAllNotes();

  selectNoteElement.classList.add("select-actuality-notes");

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
  const noteEntriesElement = document.querySelectorAll(".notice-entry-list");
  noteEntriesElement.forEach((noteEntry) => {
    noteEntry.classList.remove("select-actuality-notes");
  });
}

/* Mein Lösungsvorschlag:

  const noticeEntryListDiv = document.createElement("div");
  noticeEntryListDiv.classList.add("notice-entry-list");
  noticeEntryListDiv.classList.add("select-actuality");
  noticeEntryListDiv.setAttribute("data-id", "6");

  const noticeEntryListTitleDiv = document.createElement("div");
  noticeEntryListTitleDiv.classList.add("notice-entry-list-title");
  const noticeEntryListTitle = document.createTextNode("Notiz 1");

  const noticeEntryListContentDiv = document.createElement("div");
  noticeEntryListContentDiv.classList.add("notice-entry-list-content");

  const noticeEntryListContent = document.createTextNode("sdhdsjhdsjdsl");

  const noticeEntryListDateDiv = document.createElement("div");
  noticeEntryListDateDiv.classList.add("notice-entry-list-date");


  const dateNotice = new Date(Date.UTC(2025, 5, 25, 18, 50, 22));
  const noticeEntryListDate = document.createTextNode(dateNotice.toLocaleString("de-DE"));

  noticeEntryListTitleDiv.appendChild(noticeEntryListTitle);
  noticeEntryListContentDiv.appendChild(noticeEntryListContent);
  noticeEntryListDateDiv.appendChild(noticeEntryListDate);

  noticeEntryListDiv.appendChild(noticeEntryListTitleDiv);
  noticeEntryListDiv.appendChild(noticeEntryListContentDiv);
  noticeEntryListDiv.appendChild(noticeEntryListDateDiv);

  document.getElementById("notes-lists").appendChild(noticeEntryListDiv);

  console.log(noticeEntryListDiv);
*/
