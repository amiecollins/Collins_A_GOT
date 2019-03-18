// Javascript Doc
(() => {

	console.log("Javascript is linked up");

	//variable stack
	//grab the sheilds at the bottom of the page

	const sheilds = document.querySelectorAll(".sigil-container"),
		lightBox = document.querySelector(".lightbox"),
		video = document.querySelector("video");

	function showLightBox() {
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

	sheilds.forEach(sheild => sheild.addEventListener("click", showLightBox));

	video.addEventListener("ended", hideLightBox);

})();