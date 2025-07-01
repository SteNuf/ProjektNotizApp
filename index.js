const notesListElement = document.querySelector('.notes-list');

const MOCK_Notes =
[
  {
    title: "Notiz 1",
    content: "Die ist ein kleiner Text.",
    id: 1,
    lastUpdate: new Date().getTime(),
  },

  {
    title: "Notiz 2",
    content: "Lorem ipsum zur Notiz 2.",
    id: 2,
    lastUpdate: new Date().getTime(),
  },

  {
    title: "Notiz 3",
    content: "Lorem Ipsum",
    id: 3,
    lastUpdate: new Date().getTime(),
  },

  {
    title: "Notiz 4",
    content: "Lorem Ipsum",
    id: 4,
    lastUpdate: new Date().getTime(),
  },


  {
    title: "Notiz 5",
    content: "Lorem Ipsum",
    id: 5,
    lastUpdate: new Date().getTime(),
  },

  {
    title: "Notiz 6",
    content: "Lorem Ipsum",
    id: 6,
    lastUpdate: new Date().getTime(),
  },
];

function displayNotesList() {
  const notes = MOCK_Notes;

  let html = '';

  notesListElement.innerHTML = html;


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
