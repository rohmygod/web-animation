
// document.addEventListener('keydown', (shift) => {
//      if(shift.key == “32”)
//      {
// 	spatie.classList.toggle(“.explosion”);
//      }

// });

var fire = document.getElementById('vuurwerk');
	window.addEventListener('keydown', toggle);

	function toggle(event){
		if (event.keyCode === 38){
			fire.classList.toggle('show');
			fire.classList.toggle('hidden');

		}
	};


var vliegen = document.getElementById('vlieg');
	window.addEventListener('keydown', toggle1);

	function toggle1(event){
		if (event.keyCode === 86){
			vliegen.classList.toggle('show');
			vliegen.classList.toggle('hidden');

		}	};