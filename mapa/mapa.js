const meuMapa = L.map('mapa').setView([-24.4183, -53.5210], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(meuMapa);


const grupoMobilidade = L.layerGroup();
const grupoTurismo = L.layerGroup();
const grupoGastronomia = L.layerGroup();
const grupoPostos = L.layerGroup();
const grupoHospitais = L.layerGroup();
const grupoPostosSaude = L.layerGroup();
const grupoFarmacia = L.layerGroup();

const todasCategorias = {
    "mobilidade": grupoMobilidade,
    "turismo": grupoTurismo,
    "gastronomia": grupoGastronomia,
    "posto": grupoPostos,
    "hospital": grupoHospitais,
    "posto de saúde": grupoPostosSaude,
    "farmacia": grupoFarmacia
};
grupoMobilidade.addTo(meuMapa)

async function carregarPontos() {
    try {
        const resposta = await fetch("http://localhost:3000/api/pontos");
        const pontos = await resposta.json();

        const divs=document.getElementById("informacoes");
            divs.innerHTML='';

        pontos.forEach(ponto => {

            const pino = L.marker([ponto.latitude, ponto.longitude]).bindPopup(`<b>${ponto.nome}</b>`);

            const grupoCategoria = ponto.categoria_nome.toLowerCase();

            if (todasCategorias[grupoCategoria]) {
                pino.addTo(todasCategorias[grupoCategoria]);
            } else {
                console.warn(`categoria não encontrada ${grupoCategoria}`);
            }

      
            const googleGPS = `https://www.google.com/maps/dir/?api=1&destination=${ponto.latitude},${ponto.longitude}`;
            const wazeGPS = `https://waze.com/ul?ll=${ponto.latitude},${ponto.longitude}&navigate=yes`;

            
            divs.innerHTML+=`
             <div class="ponto-card">
                <div class="introducao">
                    <img src="../imagens/pontos/${ponto.imagem}">
                    <div class="descricao">
                    <h3>${ponto.nome}</h3>
                    <p><strong>Endereço : </strong>${ponto.endereco}</p>
                    <p>${ponto.descricao}</p>
                    </div>
                </div>
                <div class="links">
                    <a href="${googleGPS}"  target="_blank" ><button id="maps">Abrir no Google Maps</button></a>
                    <a href="${wazeGPS}"  target="_blank" ><button id="waze">Abrir no Waze</button></a>
                </div>
             </div>
            `
        })
    }
    catch (erro) {
        console.error("Erro ao carregar os dados do mapa:", erro);
    }
}

const botoes = document.querySelectorAll('.btn-filtro');
botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {

        botoes.forEach(b => b.classList.remove('ativo'));

        this.classList.add('ativo');

        for (var key in todasCategorias) {
            meuMapa.removeLayer(todasCategorias[key]);
        }

        var categoriaClicada = this.getAttribute('data-categoria');

        todasCategorias[categoriaClicada].addTo(meuMapa);
    });
});
carregarPontos();