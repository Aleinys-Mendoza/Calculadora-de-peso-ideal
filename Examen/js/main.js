document.getElementById('calculadora').addEventListener('submit', function(event) {
    event.preventDefault();

        const sexo=document.getElementById("sexo").value;
        const edad=parseFloat(document.getElementById ("edad").value);
        const pesoA=parseFloat(document.getElementById ("pesoA").value);
        const estatura=parseFloat(document.getElementById ("estatura").value);
        let resultado, pesoideal , imc, estaturaM, pesop

        if (sexo === "" || isNaN(edad) ) {
            alert(" Por favor ingrese los valores esperados!")
          }

          else{
            switch(sexo){
                case 'hombre':
                    if (edad <= 11 && edad <= 14){
                         estaturaM = estatura / 100;
                         let imc = pesoA / (estaturaM * estaturaM);
                         if(imc<=18.5){
                            resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                        }
                        else  if(imc >= 18.5 && imc < 25 ){
                          resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                       }
                        else  if(imc >= 25 && imc < 29.9 ){
                        resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                       }  
                        else  if(imc >= 30 && imc < 34.9 ){
                        resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                       }              
                         else  if(imc >= 35 && imc < 39.9 ){
                        resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                       }
                        else  if(imc >= 40 && imc < 49.9 ){
                        resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                       }
                         else  if(imc > 50){
                        resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                       }

                         pesoideal = estatura - 100 - ((estatura- 150) / 4);
                         pesop = pesoA - pesoideal;
                         document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+""+resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                    }

                    else if (edad >= 15 && edad <= 18){
                      estaturaM = estatura / 100;
                      let imc = pesoA / (estaturaM * estaturaM);
                      if(imc<=18.5){
                         resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                     }
                     else  if(imc >= 18.5 && imc < 25 ){
                       resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                    }
                     else  if(imc >= 25 && imc < 29.9 ){
                     resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                    }  
                     else  if(imc >= 30 && imc < 34.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                    }              
                      else  if(imc >= 35 && imc < 39.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                    }
                     else  if(imc >= 40 && imc < 49.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                    }
                      else  if(imc > 50){
                     resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                    }

                      pesoideal = estatura - 100 - ((estatura- 150) / 4);
                      pesop = pesoA - pesoideal;
                      document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                    }

                    else if (edad >= 19 && edad <= 24){
                      estaturaM = estatura / 100;
                      let imc = pesoA / (estaturaM * estaturaM);
                      if(imc<=18.5){
                         resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                     }
                     else  if(imc >= 18.5 && imc < 25 ){
                       resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                    }
                     else  if(imc >= 25 && imc < 29.9 ){
                     resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                    }  
                     else  if(imc >= 30 && imc < 34.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                    }              
                      else  if(imc >= 35 && imc < 39.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                    }
                     else  if(imc >= 40 && imc < 49.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                    }
                      else  if(imc > 50){
                     resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                    }

                      pesoideal = estatura - 100 - ((estatura- 150) / 4);
                      pesop = pesoA - pesoideal;
                      document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                    }

                    else if (edad >= 25 && edad <= 50){
                      estaturaM = estatura / 100;
                      let imc = pesoA / (estaturaM * estaturaM);
                      if(imc<=18.5){
                         resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                     }
                     else  if(imc >= 18.5 && imc < 25 ){
                       resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                    }
                     else  if(imc >= 25 && imc < 29.9 ){
                     resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                    }  
                     else  if(imc >= 30 && imc < 34.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                    }              
                      else  if(imc >= 35 && imc < 39.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                    }
                     else  if(imc >= 40 && imc < 49.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                    }
                      else  if(imc > 50){
                     resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                    }

                      pesoideal = estatura - 100 - ((estatura- 150) / 4);
                      pesop = pesoA - pesoideal;
                      document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                    }

                    else if (edad >=51){
                      estaturaM = estatura / 100;
                      let imc = pesoA / (estaturaM * estaturaM);
                      if(imc<=18.5){
                         resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                     }
                     else  if(imc >= 18.5 && imc < 25 ){
                       resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                    }
                     else  if(imc >= 25 && imc < 29.9 ){
                     resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                    }  
                     else  if(imc >= 30 && imc < 34.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                    }              
                      else  if(imc >= 35 && imc < 39.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                    }
                     else  if(imc >= 40 && imc < 49.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                    }
                      else  if(imc > 50){
                     resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                    }

                      pesoideal = estatura - 100 - ((estatura- 150) / 4);
                      pesop = pesoA - pesoideal;
                      document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"
                  
                      
                    } 
                      break;


                    case'mujer':
                    if (edad <= 11 && edad <= 14){
                      estaturaM = estatura / 100;
                      let imc = pesoA / (estaturaM * estaturaM);
                      if(imc<=18.5){
                         resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                     }
                     else  if(imc >= 18.5 && imc < 25 ){
                       resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                    }
                     else  if(imc >= 25 && imc < 29.9 ){
                     resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                    }  
                     else  if(imc >= 30 && imc < 34.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                    }              
                      else  if(imc >= 35 && imc < 39.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                    }
                     else  if(imc >= 40 && imc < 49.9 ){
                     resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                    }
                      else  if(imc > 50){
                     resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                    }

                      pesoideal = estatura - 100 - ((estatura- 150) / 2);
                      pesop = pesoA - pesoideal;
                      document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+""+resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"
                 }
                  
                 else if (edad >= 15 && edad <= 18){
                  estaturaM = estatura / 100;
                  let imc = pesoA / (estaturaM * estaturaM);
                  if(imc<=18.5){
                     resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                 }
                 else  if(imc >= 18.5 && imc < 25 ){
                   resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                }
                 else  if(imc >= 25 && imc < 29.9 ){
                 resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                }  
                 else  if(imc >= 30 && imc < 34.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                }              
                  else  if(imc >= 35 && imc < 39.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                }
                 else  if(imc >= 40 && imc < 49.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                }
                  else  if(imc > 50){
                 resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                }

                  pesoideal = estatura - 100 - ((estatura- 150) / 2);
                  pesop = pesoA - pesoideal;
                  document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                }

                else if (edad >= 19 && edad <= 24){
                  estaturaM = estatura / 100;
                  let imc = pesoA / (estaturaM * estaturaM);
                  if(imc<=18.5){
                     resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                 }
                 else  if(imc >= 18.5 && imc < 25 ){
                   resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                }
                 else  if(imc >= 25 && imc < 29.9 ){
                 resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                }  
                 else  if(imc >= 30 && imc < 34.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                }              
                  else  if(imc >= 35 && imc < 39.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                }
                 else  if(imc >= 40 && imc < 49.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                }
                  else  if(imc > 50){
                 resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                }

                  pesoideal = estatura - 100 - ((estatura- 150) / 2);
                  pesop = pesoA - pesoideal;
                  document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                }

                else if (edad >= 25 && edad <= 50){
                  estaturaM = estatura / 100;
                  let imc = pesoA / (estaturaM * estaturaM);
                  if(imc<=18.5){
                     resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                 }
                 else  if(imc >= 18.5 && imc < 25 ){
                   resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                }
                 else  if(imc >= 25 && imc < 29.9 ){
                 resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                }  
                 else  if(imc >= 30 && imc < 34.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                }              
                  else  if(imc >= 35 && imc < 39.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                }
                 else  if(imc >= 40 && imc < 49.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                }
                  else  if(imc > 50){
                 resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                }

                  pesoideal = estatura - 100 - ((estatura- 150) / 2);
                  pesop = pesoA - pesoideal;
                  document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                }

                else if (edad >=50){
                  estaturaM = estatura / 100;
                  let imc = pesoA / (estaturaM * estaturaM);
                  if(imc<=18.5){
                     resultado="<span class='badge text-bg-primary'>Bajo peso</span>"
                 }
                 else  if(imc >= 18.5 && imc < 25 ){
                   resultado="<span class='badge text-bg-primary'>Peso normal</span>"
                }
                 else  if(imc >= 25 && imc < 29.9 ){
                 resultado="<span class='badge text-bg-primary'>Sobre peso</span>"
                }  
                 else  if(imc >= 30 && imc < 34.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad I</span>"
                }              
                  else  if(imc >= 35 && imc < 39.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad II</span>"
                }
                 else  if(imc >= 40 && imc < 49.9 ){
                 resultado="<span class='badge text-bg-danger'>Obesidad III</span>"
                }
                  else  if(imc > 50){
                 resultado="<span class='badge text-bg-danger'>Obesidad IIII</span>"
                }

                  pesoideal = estatura - 100 - ((estatura- 150) / 2);
                  pesop = pesoA - pesoideal;
                  document.getElementById("resultado").innerHTML="<div class='alert alert-secondary' role='alert'><strong>Respuesta: </strong><br>Edad: "+ edad+"<br>Peso Actual: "+ pesoA+"(Kg) <br> Altura: "+ estaturaM+"(M)<br>IMC: "+ imc.toFixed(1)+" "+ resultado+" <br>Peso ideal: <span class='badge text-bg-success'>"+ pesoideal.toFixed(1)+" (Kg)</span><br>Deberia perder: <span class='badge text-bg-dark'>"+ pesop.toFixed(1)+" (Kg)</span> </div>"

                }

                  break;

                 
                default:
              resultado="Selecciona una opcion correcta";
              document.getElementById("resultado").innerHTML=alert(resultado)
           


            }
          }
})