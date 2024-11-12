const bodyEl = document.querySelector("body");

function toggle(e) {
  const sectionEl = e.currentTarget;
  const element = e.currentTarget.nextElementSibling;

  element.classList.toggle("active");

  // const icon = e.target.querySelector("i");

  if (sectionEl.childNodes[1]) {
    sectionEl.childNodes[1].classList.toggle("fa-plus");
    sectionEl.childNodes[1].classList.toggle("fa-minus");
  }

  // if (icon) {
  //   icon.classList.toggle("fa-plus");
  //   icon.classList.toggle("fa-minus");
  // }
}

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((data) => {
    const iconEl = document.createElement("i");
    const divEl = document.createElement("div");
    const divEl2 = document.createElement("div");

    iconEl.setAttribute("class", "fa fa-plus");
    divEl.setAttribute("class", "section");
    divEl2.setAttribute("class", "description");

    divEl.textContent = data.title;
    divEl2.textContent = data.body;

    if (data.id % 2 === 0) {
      divEl.style.backgroundColor = "#B4E7B2";
      divEl.style.borderStyle = "solid";
      divEl2.style.backgroundColor = "#E6E6FA";
    }

    divEl.appendChild(iconEl);
    bodyEl.appendChild(divEl);
    bodyEl.appendChild(divEl2);

    divEl.addEventListener("click", toggle);
  });
}

getPosts();
