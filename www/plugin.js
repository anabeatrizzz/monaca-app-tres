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
})