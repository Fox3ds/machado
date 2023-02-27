


const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pulo = () => {
	mario.classList.add('pulo');

	setTimeout(()=>{
		mario.classList.remove('pulo');
	},500)
}

document.addEventListener('keydown', pulo);


const loop = setInterval(()=>{
		const canoPosition = cano.offsetLeft;
		const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

		if(canoPosition <= 120 && canoPosition > 0 && marioPosition < 122){
			cano.style.animation = 'none';
			cano.style.left = ` ${canoPosition}px`;

			mario.style.animation = 'none';
			mario.style.bottom = `${marioPosition}px`;
			mario.src = 'game-over.png';
			mario.style.width = '75px';
			mario.style.marginleft = '50px';

			clearInterval(loop);

		}
},10)