const container = document.querySelector('#calculator');
const output = document.querySelector('.input-calculator input');
const button = document.querySelectorAll('button');
const jamDigital = document.querySelector('#jam-digital');


container.addEventListener('click', function(e) {
	e.preventDefault();
	const element = e.target;

	// BTN ON OFF
	if (element.classList.contains('i/o') || element.classList.contains('bx-power-off')) {
		if (element.classList.contains('off')) {
			element.classList.replace('off','on');
			button.forEach(btn => {
				if (!(btn.classList.contains('i/o'))) {
					btn.removeAttribute('disabled');
				}
			})
		}else {
			element.classList.replace('on','off');
			button.forEach(btn => {
				if (!(btn.classList.contains('i/o'))) {
					btn.setAttribute('disabled','true');
				}
			})
		}
	}

	// BTN CLEAR
	if (element.classList.contains('clear') || element.classList.contains('bx-trash')) {
		output.value = '';
	}

});

button.forEach(btn => {
	btn.addEventListener('click', () => {

		if (!(btn.classList.contains('i/o')) && !(btn.classList.contains('samadengan'))) {
			if (output.value == '') {
				if (!btn.classList.contains('kali') && !btn.classList.contains('bagi') && !btn.classList.contains('tambah') && !btn.classList.contains('samadengan') && !btn.classList.contains('kurang')) {
					output.value += btn.innerHTML;		
				}
			} else {
				btn.removeAttribute('disabled');
				output.value += btn.innerHTML;
			}
		}

		if (btn.classList.contains('samadengan')) {
			if (output.value != 0) {
				let input = output.value;
				output.value = eval(input);
			}
			

		}
	});
});


function parseDate(waktu) {
	return (waktu > 10) ? waktu : `0${waktu}`; 
}

setInterval(() => {
	let date = new Date();
	let jam = parseDate(date.getHours());
	let menit = parseDate(date.getMinutes());
	let detik = parseDate(date.getSeconds());

	jamDigital.innerHTML = `${jam}:${menit}:${detik} ${(jam >= 18) ? 'AM' : 'PM'}`;
},1000)
