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

const botaoEscuro=document.getElementById("botaoEscuro");
botaoEscuro.addEventListener("click",()=>{
  document.body.classList.add("Escuro");
})

const botaoClaro=document.getElementById("botaoClaro");
botaoClaro.addEventListener("click",()=>{
  document.body.classList.remove("Escuro");
})