 function abrirModal() {
            document.getElementById("modal").style.display = "flex";
        }

        function fecharModal() {
            document.getElementById("modal").style.display = "none";
        }
        document.addEventListener('DOMContentLoaded', () => {
    // 1. APLICAÇÃO DO TEMA (Executa em TODAS as páginas)
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "Escuro") {
        document.body.classList.add("Escuro");
    }

    // 2. LÓGICA DO MENU (Executa apenas se o botão existir na página)
    const botaoMenu = document.getElementById("botaoMenu");
    const fechar = document.getElementById("closeMenu");
    
    if (botaoMenu && fechar) {
        botaoMenu.addEventListener("click", () => {
            document.querySelector(".escondido").classList.toggle('aberto');
        });
        fechar.addEventListener("click", () => {
            document.querySelector(".escondido").classList.remove('aberto');
        });
    }

    // 3. LÓGICA DOS BOTÕES DE TEMA (Executa apenas se os botões existirem)
    const botaoEscuro = document.getElementById("botaoEscuro");
    const botaoClaro = document.getElementById("botaoClaro");

    if (botaoEscuro) {
        botaoEscuro.addEventListener("click", () => {
            document.body.classList.add("Escuro");
            localStorage.setItem("tema", "Escuro");
            // Atualiza o Botpress se ele existir
            if (typeof botpress !== "undefined") botpress.config({ theme: "dark" });
        });
    }

    if (botaoClaro) {
        botaoClaro.addEventListener("click", () => {
            document.body.classList.remove("Escuro");
            localStorage.setItem("tema", "Claro");
            // Atualiza o Botpress se ele existir
            if (typeof botpress !== "undefined") botpress.config({ theme: "light" });
        });
    }
});