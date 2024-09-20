// // VARIAVEL A

// Seleciona a variável do botão A
const toggleA = document.querySelector(".a.toggle");
// Verifica o estado do botão A e faz o toggle na classe
const toggleOfA = () => {
  toggleA.classList.contains("true") ? true : false;
  toggleA.classList.toggle("true")
}
toggleA.addEventListener("click", toggleOfA, false);

// VARIAVEL B

// Seleciona a variável do botão B
const toggleB = document.querySelector(".b.toggle");
// Verifica o estado do botão B e faz o toggle na classe
const toggleOfB = () => {
  toggleB.classList.contains("true") ? true : false;
  toggleB.classList.toggle("true")
}
toggleB.addEventListener("click", toggleOfB, false);

// Primeira ~

// Seleciona a variável da ~
const toggleC = document.querySelector(".c.toggle");
// Verifica o estado da ~ e faz o toggle na classe
const toggleOfC = () => {
  toggleC.classList.contains("true") ? true : false;
  toggleC.classList.toggle("true")
}
toggleC.addEventListener("click", toggleOfC, false);

// Segunda ~

// Seleciona a variável da ~
const toggleD = document.querySelector(".d.toggle");
// Verifica o estado da ~ e faz o toggle na classe
const toggleOfD = () => {
  toggleD.classList.contains("true") ? true : false;
  toggleD.classList.toggle("true")
}
toggleD.addEventListener("click", toggleOfD, false);

// OPERADOR
const operador = document.querySelector('.o.click');

// Array para a lista
var listItems = [];

function filterValuesBuildList() {
  let valueA = toggleA.classList.contains("true")
  ? true
  : false;
  let valueB = toggleB.classList.contains("true")
  ? true
  : false;
  let valueC = toggleC.classList.contains("true")
  ? true
  : false;
  let valueD = toggleD.classList.contains("true")
  ? true
  : false;

  let operator = operador.value;

  switch(operator) {
    case "∧":
      (valueC === false) && (valueA === true) && (valueD === false) && (valueB === true) || (valueC === true) && (valueA === false) && (valueD === true) && (valueB === false) || (valueC === false) && (valueA === true) && (valueD === true) && (valueB === false) || (valueC === true) && (valueA === false) && (valueD === false) && (valueB === true)
      ? listItems.push("Deu Conjunção verdadeira! (っ＾▿＾)っ")
      :  listItems.push("Deu Conjunção falsa... (╥﹏╥)");
      break
    case "∨":
      valueC === valueA && valueD !== valueB || valueC !== valueA && valueD === valueB || valueC !== valueA && valueD !== valueB
      ? listItems.push("Deu Disjunção verdadeira! (っ＾▿＾)っ")
      :  listItems.push("Deu Disjunção falsa... (╥﹏╥)");
      break
    case "→":
      (valueC === false) && (valueA === true) && (valueD === false) && (valueB === false) || (valueC === true) && (valueA === false) && (valueD === true) && (valueB === true) || (valueC === false) && (valueA === true) && (valueD === true) && (valueB === true)
      ? listItems.push("Deu Vera Fischer (falso)...(ㆆ_ㆆ)")
      :  listItems.push("Deu Condicional verdadeira! (っ＾▿＾)っ");
      break
    case "↔":
      (valueC === valueA) && (valueD === valueB) || (valueC !== valueA) && (valueD !== valueB) || valueC === valueA === valueD === valueB
      ? listItems.push("Deu Bicondicional verdadeira! (っ＾▿＾)っ")
      :  listItems.push("Deu Bicondicional falsa... (╥﹏╥)");
      break
    default:
    console.log("Exceção");
  }
  
  // Seleciona a div wrapper e a ul.list
  const wrapper = document.querySelector(".list.wrapper");
  const itemsUList = document.querySelector(".itemsList");
  
  function createListItem() {    
    const li = document.createElement('li');
    for(let i = 0; i < listItems.length; i++){
      li.setAttribute("class", `item_${i}`);
      li.innerText = listItems[i];
      itemsUList.prepend(li);
      wrapper.prepend(itemsUList);
    }
  } 
  
  createListItem()
  return
}

const send = document.querySelector(".click.send").addEventListener("click", filterValuesBuildList, false)