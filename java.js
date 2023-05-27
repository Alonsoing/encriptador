var operacion = 'encriptar';

function obtenerOperation(op) {
    operacion = op;
    procesarTexto();
  }

function procesarTexto() {
    var entradaTexto = document.getElementById('entradaTexto').value;
    var salidaTexto = '';

    if (operacion === 'encriptar') {
      salidaTexto = encriptarTexto(entradaTexto);
    } else {
      salidaTexto = desencriptarTexto(entradaTexto);
    }

    document.getElementById('salidaTexto').value = salidaTexto;
  }

  function encriptarTexto(text) {
    var encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    return encryptedText;
  }

  function desencriptarTexto(text) {
    var decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
    return decryptedText;
  }

  function copiarTexto() {
    var salidaTexto = document.getElementById('salidaTexto');
    salidaTexto.select();
    salidaTexto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles: ' + salidaTexto.value);
  }