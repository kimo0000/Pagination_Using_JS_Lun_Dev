const listes = document.querySelectorAll(".items");
const listItems = document.querySelectorAll(".item");
const listPages = document.querySelector(".pages");

let thisPage = 1;
let totalPage = 6;

function loadPages() {
  let beginPage = totalPage * (thisPage - 1);
  let endPage = totalPage * thisPage - 1;
  listItems.forEach((item, key) => {
    if (key >= beginPage && key <= endPage) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

    changePage();
  });
}

loadPages();

function changePage() {
  let count = Math.ceil(listItems.length / totalPage);
  let liTag = "";
  let activeTag;
  //    listPages.innerHTML = "";

  console.log(thisPage);

  if (thisPage != 1) {
    liTag += `<li class="prev" onclick="element(${thisPage - 1})">Prev</li>`;
  }

  for (let i = 1; i <= count; i++) {
    //Methode 1:
    i == thisPage ? (activeTag = "active") : (activeTag = "");
    liTag += `<li class="${activeTag}" onclick="element(${i})">${i}</li>`;

    //Methode 2:
    //  let liEl = document.createElement("li");
    //  liEl.innerText = i;
    //  i == thisPage ? liEl.className = "active" : null;
    //  listPages.appendChild(liEl);
  }

  if (thisPage != count) {
    liTag += `<li class="next" onclick="element(${thisPage + 1})">Next</li>`;
  }
  //Methode 1:
  listPages.innerHTML = liTag;
}

function element(i) {
  thisPage = i;
  loadPages();
}
