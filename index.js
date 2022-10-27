var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//PARTS AND TASKS ONE:
//====================

//PART/TASK 1
//===========

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

//PART/TASK 2
//===========

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.style.height = "100%";
topMenuEl.classList.add("flex-around");

//PART/TASK 3:
//===========

menuLinks.forEach(function (link) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", link.href);
  linkEl.textContent = link.text;
  topMenuEl.appendChild(linkEl);
});

//SOURCES USED:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach TO forEach
//https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute TO setAttribute
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent TO textContent
//https://www.w3schools.com/jsref/met_node_appendchild.asp TO appendChild

//========================================================================================================================

//PARTS AND TASKS TWO:
//====================

//PART/TASK 4
//===========

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//PART/TASK 5
//===========

const topMenuLinks = document.querySelectorAll("#top-menu a");
let showingSubMenu = false;

topMenuEl.addEventListener("click", function (mu) {
  //This is undefined function "mu" is used as placeholder.
  mu.preventDefault();
  const link = mu.target;
  if (link.tagName !== "A") return;
  console.log(link.textContent);

  //To check if an element contains a class, you use the contains() method of the classList property of the element:
  if (link.classList.contains("active")) {
    link.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  link.classList.add("active");

  const linkData = menuLinks.find(function (linkObj) {
    return linkObj.text === link.textContent;
  });
  showingSubMenu = "subLinks" in linkData;

  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
    mainEl.innerHTML = "<h1>about</h1>";
  }
});

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach(function (link) {
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

//PART/TASK 6
//===========

subMenuEl.addEventListener("click", function (h1text) {
  h1text.preventDefault();
  const link = h1text.target;
  if (link.tagName !== "A") return;
  console.log(link.textContent);

  showingSubMenu = false;
  subMenuEl.style.top = "0";

  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  mainEl.innerHTML = `<h1>${link.textContent}</h1>`; //
});
