
document.addEventListener('keydown', playSound);
document.addEventListener('touchstart', play);
document.addEventListener('mouseover', play);

function playSound(e){
		let selector = 'audio[data-key="'+e.keyCode+'"]';
		//let selector = `audio[data-key="${e.keyCode}"]`;
		let audio = document.querySelector(selector);
		let key = document.querySelector('.key[data-key="'+e.keyCode+'"]');

		console.log(selector);
		console.log(audio);

		if(audio!== null) {
			audio.currentTime = 0;
			key.classList.add('playing');
			audio.play();
		}

		function revertStyle(e){
			if(e.propertyName === 'transform'){
				this.classList.remove('playing');
			}
		}

		let keys = document.querySelectorAll('.key');

		keys.forEach(function(key){
			key.addEventListener('transitionend', revertStyle);
		});
}

function play(){
	var el = document.getElementsByTagName("span");
	var a = el.getAttribute("data-keys");

	console.log(el);
	console.log(a);

	if(a!== null) {
		audio.currentTime = 0;
		key.classList.add('playing');
		audio.play();
	}

}
