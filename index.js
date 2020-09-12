const btnSubmit = document.getElementById("btnSubmit");
const modal = document.querySelector("modal");
const documentWindow = document.querySelector("documentWindow");
const documentWindowSub = document.querySelector("documentWindowSub");

let arr = [];

btnSubmit.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  console.log(title, description);

  arr.push({ title: title, description: description });
  console.log(arr);
  arr.forEach((item) => {
    document.innerHtml += `dkskdskd ${item}`;
  });

  documentWindowSub.style.display = "block";
  arr.push(title, description);
  arr.forEach((item) => {
    document.innerHTML += `${item}<br/>`;
  });
});
