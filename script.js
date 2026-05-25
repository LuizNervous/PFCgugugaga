const botaoMenu=document.getElementById("botaoMenu");
botaoMenu.addEventListener("click", ()=>{
  const divMenu=document.querySelector(".escondido");
  divMenu.classList.toggle('aberto')
})