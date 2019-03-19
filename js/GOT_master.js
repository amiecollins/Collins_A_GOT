// Javascript Doc
(() => {

	console.log("Javascript is linked up");

	//variable stack
	//grab the sheilds at the bottom of the page

	const sheilds = document.querySelectorAll(".sigil-container"),
		lightBox = document.querySelector(".lightbox"),
		video = document.querySelector("video"),
		closeLB = document.querySelector(".lightbox-close"),
		banner = document.querySelector("#houseImages");

	function showLightBox(sheild) {
		// Grab right video source
		var targetHouse = sheild.className.split(" ")[1];
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);
		video.src = `video/House-${targetSrc}.mp4`;

		lightBox.classList.add('show-lightbox');
		video.play();
	}

	function hideLightBox() {
		lightBox.classList.remove('show-lightbox');
		// rewind video
		// pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		//banner.style.right = this.dataset.offset * 600;
		TweenMax.to(banner, 0.8, {right: this.dataset.offset * 600, onComplete:showLightBox, onCompleteParams: [this]});
	}

	sheilds.forEach(sheild => sheild.addEventListener("click", animateBanner));

	video.addEventListener("ended", hideLightBox);

	closeLB.addEventListener("click", hideLightBox);

})();