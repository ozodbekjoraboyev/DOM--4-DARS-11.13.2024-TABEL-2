// let crutTabel = document.querySelector(".crutTabel");
// let thead = document.querySelector("thead");
// let tbody = document.querySelector("tbody");
// let form1 = document.querySelector(".form1");

// let crutDtas = [
//     { id: 1, name: "jon dov", emile: "jon@gmali.com" },
//     { id: 2, name: "jon dev", emile: "jon@gmali.com" },
//     { id: 3, name: "alisa done", emile: "alisa@gmali.com" },
//     { id: 4, name: "bob dov", emile: "bob@gmali.com" },
//     { id: 5, name: "mis dov", emile: "mis@gmali.com" },
//     { id: 6, name: "2 dov", emile: "alisa2@gmali.com" }
// ];
// function renderTabel() {
//     let tr = document.createElement("tr");
//     Object.keys(crutDtas[0]).forEach((val) => {
//         let th = document.createElement("th");
//         th.textContent = val.charAt(0).toUpperCase() + val.slice(1);
//         tr.append(th);
//     });
//     let thAcktio = document.createElement("th");
//     thAcktio.textContent = "Acktio";
//     tr.append(thAcktio);
//     thead.append(tr);
// }
// function renderTabelDatas(data) {
//     tbody.innerHTML = "";
//     data.forEach((val) => {
//         let tr = document.createElement("tr");
//         let tdid = document.createElement("td");
//         let tdName = document.createElement("td");
//         let tdEmail = document.createElement("td");
//         let tdAcktio = document.createElement("td");
//         tdid.textContent = val.id;
//         tdName.textContent = val.name;
//         tdEmail.textContent = val.emile;

//         let delBtn = document.createElement("button");
//         let delEdit = document.createElement("button");
//         delBtn.textContent = "Delete";
//         delEdit.textContent = "Edit";
//         tdAcktio.append(delBtn, delEdit);
//         tr.append(tdid, tdName, tdEmail, tdAcktio);
//         tbody.append(tr);
//         delBtn.addEventListener("click", () => onDelete(val.id));
//         delEdit.addEventListener("click", () => onEdit(val));
//     });
//     if (crutDtas.length === 0) {
//         let tr = document.createElement("tr");
//         let th = document.createElement("th");
//         th.textContent = "Your files are finished, click submit and a new file will be created";
//         tr.append(th);
//         th.setAttribute("colspan", 4);
//         tbody.append(tr);
//     }
// }

// renderTabel();
// renderTabelDatas(crutDtas);
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let elment = e.target;
//     let nameText = elment[0].value;
//     let emileText = elment[1].value;
//     let newData = {
//         id: new Date().getTime().toString(),
//         name: nameText,
//         emile: emileText
//     };

//     crutDtas.push(newData);
//     renderTabelDatas(crutDtas);
// });
// function onDelete(id) {
//     crutDtas = crutDtas.filter((val) => val.id !== id);
//     renderTabelDatas(crutDtas);
//     console.log(crutDtas);
// }
// function onEdit(val) {
//     let nameText = prompt("Enter updated name", val.name);
//     let emileText = prompt("Enter updated email", val.emile);
//     if (nameText && emileText) {
//         let newVal = { ...val, name: nameText, emile: emileText };
//         crutDtas = crutDtas.map((itm) => itm.id === val.id ? newVal : itm);
//         renderTabelDatas(crutDtas);
//     }
// }






//////////////////////////////////////////////////
let form = document.querySelector("form");  
let ul = document.querySelector(".myList");
let select = document.querySelector("#trans");

let obj = {
  moshina: 90,
  poyezd: 150,
  samalyot: 400,
  mototsikl: 70,
  velosiped: 40,
  piyoda: 10,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = document.querySelector("#inputText");
  let transport = select.value;
  let masofa = parseFloat(input.value);
  if (isNaN(masofa) || masofa <= 0 || transport === "") {
    alert("Iltimos, masofa kiriting va transport tanlang!");
    return;
  }

  let tezlik = obj[transport];
  let vaqt = masofa / tezlik;
  let soat = Math.floor(vaqt); 
  let minut = Math.floor((vaqt * 1) * 60); 
  let sekund = Math.floor((minut * 1) * 60); 

  let li = document.createElement("li");
  li.textContent = `${transport} bilan ${masofa} km masofani ${soat} soat, ${minut} minut, ${sekund} sekundda bosib o'tasiz.`;
  ul.prepend(li);
  e.target.reset();
});
