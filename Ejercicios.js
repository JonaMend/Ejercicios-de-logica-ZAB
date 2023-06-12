
 //STAIR CASE 1
function ejercicioZab (n) { 
    if (n <= 0 || n > 100){
    console.log("El numero debe ser mayor a 0 y menor o igual a 100");
    return;
}

    for(let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                row += " ";
            } else {
                row += "*";
            }
        }
        console.log(row);

    }
}
 
ejercicioZab(10)
//book 2

function pagesTurn(n, p) {
    if (n <= 0 || p <= 1 || p > n) {
    return;
    }

    let pageTurns = 0;
    if (p <= (n + 1) / 2) {
    if (p % 2 === 0) {
        pageTurns = p / 2;
    } else {
        pageTurns = (p - 1) / 2;
    }
    } else {
    if (n % 2 === 0) {
        pageTurns = (n - p + 1) / 2;
    } else {
        pageTurns = (n - p) / 2;
    }
    }
    console.log(pageTurns);
}

pagesTurn(6, 2);

// 3 aves

function encontrarTipoAve(arr) {
    let conteo = []; 
    let maxOcurrencias = 0;
    let tipoMasComun = arr[0];
    for (let i = 0; i < arr.length; i++) {
      let tipoActual = arr[i];
  
      if (!conteo[tipoActual]) { 
        conteo[tipoActual] = 0; 
      }
      conteo[tipoActual]++; 
  
      if (conteo[tipoActual] > maxOcurrencias) {
       
        maxOcurrencias = conteo[tipoActual];
        tipoMasComun = tipoActual;
      } else if (conteo[tipoActual] === maxOcurrencias && tipoActual < tipoMasComun) {
    
        tipoMasComun = tipoActual;
      }
    }
  
    return "Tipo: " + tipoMasComun; 
  }
  
  let arr = [1, 4, 4, 2, 1, 1, 1];
  let resultado = encontrarTipoAve(arr); 
  console.log(resultado); 

  



