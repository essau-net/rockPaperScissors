var juego = function (eleccion)
{

  return function jugando( )
  {
    piedra.parentNode.removeChild(piedra);
    papel.parentNode.removeChild(papel);
    tijeras.parentNode.removeChild(tijeras);


    contenedorJ1.style.width = "40%";
    contenedorJ1.style.cssFloat = "left";

    contenedorJ2 = document.getElementById("contenedorJ2");
    contenedorJ2.style.width = "20%";
    contenedorJ2.style.cssFloat = "left";

    contenedorJ3 = document.createElement("div");
    contenedorJ3.setAttribute("id","contenedorJ3");
    contenedorJ3.style.cssFloat = "left";

    jugadores.appendChild(contenedorJ3);
    jugadores.style.width = "50%";

    iEleccion.src = imagenes[eleccion];
    iEleccion.style.width = "80%"
    contenedorJ1.appendChild(iEleccion);


    vs.src = imagenes["vs"];
    contenedorJ2.appendChild(vs);

    origen = eleccionC();
    iComputadora.src = origen;
    iComputadora.style.width = "80%"
    contenedorJ3.appendChild(iComputadora);

    setTimeout( resultado, 3000, imagenes[eleccion],origen );
  }

}

function eleccionC()
{
  var resultado;
  resultado = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  switch (resultado) {
    case 0:
    var computadora = "IMG/rock.png";
    break;
    case 1:
    var computadora = "IMG/paper.png";
    break;
    case 2:
    var computadora = "IMG/scissors.png";
    break;
  }

  return computadora;
}

function resultado(eleccionU, eleccionCo)
{

  if( eleccionU === eleccionCo)
  {
    alert("empate");
  }

  else
  {

    switch (eleccionU)
    {

      case "IMG/rock.png":

        if(eleccionCo ==="IMG/paper.png")
        {
          alert("gana la computadora");
          puntosC.innerHTML = parseInt(puntosC.innerHTML) + 1;
          break;
        }

        else
        {
          alert("ganaste")
          puntosU.innerHTML = parseInt(puntosU.innerHTML) + 1;
          break;
        }

      case "IMG/paper.png":

        if(eleccionCo === "IMG/scissors.png")
        {
          alert("Computadora Gana");
          puntosC.innerHTML = parseInt(puntosC.innerHTML) + 1;
          break;
        }

        else
        {
          alert("Ganaste");
          puntosU.innerHTML = parseInt(puntosU.innerHTML) + 1;
          break;
        }

      case "IMG/scissors.png":

        if(eleccionCo === "IMG/rock.png")
        {
          alert("Gana la computadora");
          puntosC.innerHTML = parseInt(puntosC.innerHTML) + 1;
          break;
        }

        else
        {
          alert("Ganaste");
          puntosU.innerHTML = parseInt(puntosU.innerHTML) + 1;
          break;
        }
    }

  }

  confOriginal();
}

function confOriginal()
{

  iEleccion.parentNode.removeChild(iEleccion);
  vs.parentNode.removeChild(vs);
  iComputadora.parentNode.removeChild(iComputadora);

  contenedorJ1.style.cssFloat = "none";
  contenedorJ2.style.cssFloat = "none";
  contenedorJ3.parentNode.removeChild(contenedorJ3);

  jugadores.style.width = "100%"
  contenedorJ1.style.width = "50%"
  contenedorJ2.style.width = "50%"

  contenedorJ1.style.height = "10%"
  contenedorJ2.style.height = "10%"

  contenedorJ1.style.margin = "auto";
  contenedorJ2.style.margin = "auto";

  var piedraN = document.createElement("img");
  var papelN = document.createElement("img");
  var tijerasN = document.createElement("img");

  piedraN.setAttribute("src","IMG/rockPre.png");
  papelN.setAttribute("src", "IMG/paperPre.png");
  tijerasN.setAttribute("src", "IMG/scissorsPre.png");

  piedraN.style.cssFloat = "left";
  papelN.style.cssFloat = "left";
  tijerasN.style.cssFloat = "left";

  piedraN.style.width = "25%";
  papelN.style.width = "25%";
  tijerasN.style.width = "40%";

  piedraN.style.paddingTop = "7%";
  papelN.style.paddingTop = "7%";
  tijerasN.style.paddingTop = "7%";

  piedraN.style.paddingLeft = "15%";
  papelN.style.paddingLeft = "15%";
  tijerasN.style.paddingLeft = "25%";

  piedra = piedraN;
  papel = papelN;
  tijeras = tijerasN;
  console.log(piedra,papel,tijeras);

  piedra.addEventListener("mousedown",juego("piedra"));
  papel.addEventListener("mousedown",juego("papel"));
  tijeras.addEventListener("mousedown",juego("tijeras"));

  contenedorJ1.appendChild(piedra);
  contenedorJ1.appendChild(papel);
  contenedorJ2.appendChild(tijeras);

}

var puntosU = document.getElementById("user");
var puntosC = document.getElementById("computer");

var imagenes = [];
imagenes["piedra"] = "IMG/rock.png";
imagenes["papel"] = "IMG/paper.png";
imagenes["tijeras"] = "IMG/scissors.png";
imagenes["vs"] = "IMG/vs.png";


var contenedorJ1 = document.getElementById("contenedorJ1");
var contenedorJ2 = document.getElementById("contenedorJ2");;
var contenedorJ3 = document.getElementById("contenedorJ3");;

var iEleccion = new Image();
var vs = new Image();
var iComputadora = new Image();

var jugadores = document.getElementById("jugadores");
var piedra = document.getElementById("piedra");
var papel = document.getElementById("papel");
var tijeras = document.getElementById("tijeras");


piedra.addEventListener( "mousedown", juego("piedra"));
papel.addEventListener( "mousedown", juego("papel"));
tijeras.addEventListener( "mousedown", juego("tijeras"));
