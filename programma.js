

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');
 
disegno.fillStyle = 'magenta'

disegno.fillRect(0,0, 100, 50);

disegno.fillStyle = 'green'
 
disegno.fillRect(100,160, 100, 50)

disegno.fillStyle = 'yellow'

disegno.fillRect(180,170, 100, 50)