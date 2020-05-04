// This is a JavaScript file

$(function(){
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
        alert(`Latitude: ${posicao.coords.latitude}\n Longitude: ${posicao.coords.longitude}\n` /* Altitude: ${posicao.coords.altitude}\n Precisão: ${posicao.coords.accuracy}\n Precisão da altitude: ${posicao.coords.altitudeAccuracy}\n Direção: ${posicao.coords.heading}\n Velocidade: ${posicao.coords.speed}\n Horario: ${posicao.timestamp}`*/);
    };
    function deuRuim(erro) {
        alert('Codigo: '    + erro.code    + '\n' +
              'Mensagem: ' + erro.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(deuBom, deuRuim);
  })
})