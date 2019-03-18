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

	function showLightBox() {
		// Grab right video source
		var targetHouse = this.className.split(" ")[1];
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

	function animateBanner(callback) {
		banner.style.right = this.dataset.offset * 600 + "px";
		callback();
	}

	sheilds.forEach(sheild => sheild.addEventListener("click", animateBanner));

	video.addEventListener("ended", hideLightBox);

	closeLB.addEventListener("click", hideLightBox);

})();