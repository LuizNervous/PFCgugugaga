const botaoMenu=document.getElementById("botaoMenu");
const fechar=document.getElementById("closeMenu");

botaoMenu.addEventListener("click", ()=>{
  const divMenu=document.querySelector(".escondido");
  divMenu.classList.toggle('aberto')

})
fechar.addEventListener("click",()=>{
const divMenu=document.querySelector(".escondido");
  divMenu.classList.remove('aberto')
});