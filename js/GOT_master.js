// Javascript Doc
(() => {

	console.log("Javascript is linked up");

	//variable stack
	//grab the sheilds at the bottom of the page

	const sheilds = document.querySelectorAll(".sigil-container"),
		lightBox = document.querySelector(".lightbox"),
		video = document.querySelector("video"),
		closeLB = document.querySelector(".lightbox-close"),
		banner = document.querySelector("#houseImages"),
		houseName = document.querySelector(".house-name"),
		houseInfo = document.querySelector(".house-info");

	const houseData = [ //STARK
	`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`
	];

	function showLightBox(sheild) {
		// Grab right video source
		var targetHouse = sheild.className.split(" ")[1];
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		// Change paragraph text
		houseName.textContent = `House ${targetSrc}`;

		houseInfo.textContent = houseData[0];

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
		TweenMax.to(banner, 0.8, {right: this.dataset.offset * 600, onComplete:showLightBox, onCompleteParams: [this]};
	}

	sheilds.forEach(sheild => sheild.addEventListener("click", animateBanner));

	video.addEventListener("ended", hideLightBox);

	closeLB.addEventListener("click", hideLightBox);

})();