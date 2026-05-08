const meuMapa = L.map('mapa').setView([-24.4183, -53.5210], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(meuMapa);


const grupoMobilidade = L.layerGroup();
const grupoTurismo = L.layerGroup();
const grupoGastronomia = L.layerGroup();
const grupoPostos = L.layerGroup();

//paradas de onibus
L.marker([-24.404883, -53.516982]).bindPopup("<b>Rodoviária</b>").addTo(grupoMobilidade);
L.marker([-24.4200, -53.5180]).bindPopup("<b>Ponto Teste</b>").addTo(grupoMobilidade);

//Turismo
L.marker([-24.406691, -53.514187]).bindPopup("<b>Praça dos Trabalhadores</b>").addTo(grupoTurismo);
L.marker([-24.4068551, -53.5205348]).bindPopup("<b>Horto Florestal</b>").addTo(grupoTurismo);
L.marker([-24.414238, -53.518487]).bindPopup("<b>Praça Paris</b>").addTo(grupoTurismo);
L.marker([-24.403970, -53.509547]).bindPopup("<b>Teatro Municipal</b>").addTo(grupoTurismo);
L.marker([-24.397700, -53.511709]).bindPopup("<b>Praça das Américas</b>").addTo(grupoTurismo);
L.marker([-24.391224, -53.514691]).bindPopup("<b>Ginásio de Esportes Tancredo Neves</b>").addTo(grupoTurismo);
L.marker([-24.407695, -53.533094]).bindPopup("<b>Centro de Evenetos</b>").addTo(grupoTurismo);
L.marker([-24.397934, -53.502696]).bindPopup("<b>Praça do Panorama</b>").addTo(grupoTurismo);



//gastronomia
L.marker([-24.4180, -53.5220]).bindPopup("<b>Restaurante da Praça(teste)</b>").addTo(grupoGastronomia);
L.marker([-24.4195, -53.5190]).bindPopup("<b>Pizzaria Boa Forma(teste)</b>").addTo(grupoGastronomia);

//Postos
L.marker([-24.4021466, -53.5130465]).bindPopup("<b>Posto Ipiranga</b>").addTo(grupoPostos);
L.marker([-24.403911, -53.535272]).bindPopup("<b>Posto Colombo</b>").addTo(grupoPostos)



const todasCategorias = {
    "mobilidade": grupoMobilidade,
    "turismo": grupoTurismo,
    "gastronomia": grupoGastronomia,
    "postos": grupoPostos
};


grupoMobilidade.addTo(meuMapa);


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