const notesListElement = document.querySelector(".notes-list");
const noticeSaveButtonElement = document.querySelector(".save");
const titleInputElmement = document.getElementById("notice-title-input");
const contentTextInputElement = document.getElementById("text-area-content");

noticeSaveButtonElement.addEventListener("click", clickSaveButton);

displayNotesList();

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
    <div class="notice-entry-list select-actuality" data-id="${note.id}">
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
  const content = titleInputElmement.value;
  console.log(title, content);

  if (!title || !content) {
    alert("Bitte Title und Inhalt eingeben!");
    return;
  }

  saveNotes(title, content);
  displayNotesList();
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
