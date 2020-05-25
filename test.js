var vliegen = document.getElementById('vlieg');
	window.addEventListener('keydown', toggle);

	function toggle(event){
		if (event.keyCode === 86){
			vliegen.classList.toggle('show');
			vliegen.classList.toggle('hidden');

		}
	};

