const objectNotice = [
  {
    title: "Notiz 1",
    content: "Die ist ein kleiner Text.",
    id: 1,
    lastUpdate: "",
  },

  {
    title: "Notiz 2",
    content: "Lorem ipsum zur Notiz 2.",
    id: 2,
    lastUpdate: "",
  },

  {
    title: "Notiz 3",
    content: "Lorem Ipsum",
    íd: 3,
    lastUpdate: "",
  },
];

console.log(objectNotice);

const noticeEntryListDiv = document.createElement("div");
noticeEntryListDiv.classList.add("notice-entry-list");
noticeEntryListDiv.classList.add("select-actuality");
noticeEntryListDiv.setAttribute("data-id", "6");

const noticeEntryListTitleDiv = document.createElement("div");
noticeEntryListTitleDiv.classList.add("notice-entry-list-title");

const noticeEntryListTitle = document.createTextNode("Test 1");

console.log(noticeEntryListDiv, noticeEntryListTitleDiv, noticeEntryListTitle);
