// This is a JavaScript file

$(function(){
  function mostrarMapa(la, lo){
    L.mapquest.key = 'krtqWEwb45vu1QC8Kd95tVKpiZrAseL6';
    var map = L.mapquest.map('map', {
      center: [la, lo],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });
    map.addControl(L.mapquest.control());

    // Recurso: https://developer.mapquest.com/documentation/mapquest-js/v1.3/examples/map-with-markers-circles-polygons/
    L.marker([la, lo], {
      icon: L.mapquest.icons.marker(),
      draggable: false
    }).bindPopup().addTo(map);
  }

  $("#btn1").click(function(){
    navigator.notification.alert("teste")
  })

  $("#btn2").click(function(){
    function Confirmar(indice){
      if(indice == 1){
        navigator.notification.alert("Foi escolhido A")
      } else {
        navigator.notification.alert("Foi escolhido B")
      }
    }
    navigator.notification.confirm("Escolha A ou B", Confirmar, "Escolha", ["A", "B"])
  })

  $("#btn3").click(function(){
    // Tocando o som de notificacao definido no celular tres vezes
    navigator.notification.beep(3)
  })

  $("#btn4").click(function(){
    // Vibrando o celular por 3 segundos. ( ͡° ͜ʖ ͡°)
    navigator.vibrate(300)
  })

  $("#btn5").click(function(){
    var deuBom = function(posicao) {
      mostrarMapa(posicao.coords.latitude, posicao.coords.longitude)
    };
    function deuRuim(erro) {
        alert(`Codigo: ${erro.code}\nMensagem: ${erro.message}`);
    }
    navigator.geolocation.getCurrentPosition(deuBom, deuRuim);
  })
})