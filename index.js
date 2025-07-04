const notesListElement = document.querySelector('.notes-list');


const MOCK_Notes =
[
  {
    title: "Notiz 1",
    content: "Die ist ein kleiner Text.",
    id: 1,
    lastUpdate: 1751626816836,
  },

  {
    title: "Notiz 2",
    content: "Lorem ipsum zur Notiz 2.",
    id: 2,
    lastUpdate: 1751626826836,
  },

  {
    title: "Notiz 3",
    content: "Lorem Ipsum",
    id: 3,
    lastUpdate: 1751626836836,
  },

  {
    title: "Notiz 4",
    content: "Lorem Ipsum",
    id: 4,
    lastUpdate: 1751626846836,
  },


  {
    title: "Notiz 5",
    content: "Lorem Ipsum",
    id: 5,
    lastUpdate: 1751626856836,
  },

  {
    title: "Notiz 6",
    content: "Lorem Ipsum",
    id: 6,
    lastUpdate:1751626866836,
  },
];

function displayNotesList() {
  const notes = MOCK_Notes;

  const sortedNotes=notes.sort((noteA, noteB)=> noteB.lastUpdate -noteA.lastUpdate);

  let html = "";

  sortedNotes.forEach(note => {
    html += `
    <div class="notice-entry-list select-actuality" data-id="${note.id}">
            <div class="notice-entry-list-title">${note.title}</div>
            <div class="notice-entry-list-content">${note.content}</div>
            <div class="notice-entry-list-date">${new Date(note.lastUpdate).toLocaleString(("de-DE"))}</div>
          </div> 
    `;
  })

  notesListElement.innerHTML = html;
}

displayNotesList();




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
