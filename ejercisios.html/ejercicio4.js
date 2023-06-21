function invertirPalabras(string) {
    var resultado = '';
    var palabras = string.split(' ');
  
    for (var i = palabras.length - 1; i >= 0; i--) {
      var palabraInvertida = '';
      for (var j = palabras[i].length - 1; j >= 0; j--) {
        palabraInvertida += palabras[i][j];
      }
      resultado += palabraInvertida + ' ';
    }
    
    resultado = resultado.trim(); 
    
    console.log(resultado);
}
node 