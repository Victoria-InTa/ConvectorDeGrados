document.querySelector('#calcular').addEventListener('click', () => {
    let celsius = parseInt(document.querySelector('#celsius').value);

    let resultado; 
      if (celsius){
          resultado = celsius * (1.8) + 32
        
      }
     console.log(resultado)
    document.querySelector('#resultado').innerHTML= resultado+'°F';

    
})