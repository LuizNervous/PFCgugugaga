  const meuMapa = L.map('mapa').setView([-24.4183, -53.5210], 14);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(meuMapa);

  
        const grupoMobilidade = L.layerGroup();
        const grupoTurismo = L.layerGroup();
        const grupoGastronomia = L.layerGroup();
        const grupoPostos = L.layerGroup();

      
        L.marker([-24.4150, -53.5200]).bindPopup("<b>Rodoviária</b>").addTo(grupoMobilidade);
        L.marker([-24.4200, -53.5180]).bindPopup("<b>Ponto de Táxi</b>").addTo(grupoMobilidade);

     
        L.marker([-24.4068551, -53.5205348]).bindPopup("<b>Horto Florestal</b>").addTo(grupoTurismo);
        L.marker([-24.4110, -53.5300]).bindPopup("<b>Praça Central</b>").addTo(grupoTurismo);

       
        L.marker([-24.4180, -53.5220]).bindPopup("<b>Restaurante da Praça</b>").addTo(grupoGastronomia);
        L.marker([-24.4195, -53.5190]).bindPopup("<b>Pizzaria Boa Forma</b>").addTo(grupoGastronomia);

       
        L.marker([-24.4021466, -53.5130465]).bindPopup("<b>Posto Ipiranga- Avaliaçao: ⭐⭐⭐⭐⭐ </b>").addTo(grupoPostos);


    
        const todasCategorias = {
            "mobilidade": grupoMobilidade,
            "turismo": grupoTurismo,
            "gastronomia": grupoGastronomia,
            "postos": grupoPostos
        };

     
        grupoMobilidade.addTo(meuMapa);

        
        const botoes = document.querySelectorAll('.btn-filtro');

    
        botoes.forEach(function(botao) {
            botao.addEventListener('click', function() {
                
             
                botoes.forEach(b => b.classList.remove('ativo'));

                this.classList.add('ativo');

                
                for (var key in todasCategorias) {
                    meuMapa.removeLayer(todasCategorias[key]);
                }

            
                var categoriaClicada = this.getAttribute('data-categoria');

               
                todasCategorias[categoriaClicada].addTo(meuMapa);
            });
        });