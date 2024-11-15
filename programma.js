

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');
 
disegno.fillStyle = 'magenta'

disegno.fillRect(0,0, 100, 50);

disegno.fillStyle = 'green'
 
disegno.fillRect(100,160, 100, 50)

disegno.fillStyle = 'yellow'

disegno.fillRect(180,170, 100, 50)

disegno.fillStyle = 'red'

disegno.fillRect(300,300, 100,100)

disegno.fillStyle = 'black'

disegno.fillRect(300,300, 5,500)

disegno.fillStyle = 'black'

disegno.fillRect(230,400, 500,5)

disegno.fillStyle = 'blue'

disegno.fillRect(250,405, 50,50)

disegno.fillStyle = 'black'

disegno.fillRect(380,400, 5,50)

disegno.fillStyle = 'black'

disegno.fillRect(380,420, 50,5)

disegno.fillStyle = 'yellow'

disegno.fillRect(385,425, 50,50)

disegno.fillStyle = 'black'

disegno.fillRect(250,340, 50,5)

disegno.fillStyle = 'magenta'

disegno.fillRect(50,250, 50,50)

disegno.fillStyle = 'magenta'

disegno.fillRect(130,250, 50,50)

disegno.fillStyle = 'magenta'

disegno.fillRect(50,300, 130,50)

disegno.fillStyle = 'magenta'

disegno.fillRect(50,330, 130,50)

disegno.fillStyle = 'magenta'

disegno.fillRect(50,250, 50,50)

let foglio2 = document.getElementById('foglio2');

let disegno2 = foglio2.getContext('2d');

foglio2.addEventListener('click', (evento) => {
    disegno2.strokeRect(evento.offsetX, evento.offsetY, 500 * Math.random(), 500 * Math.random())
});