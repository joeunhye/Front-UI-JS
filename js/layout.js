/*POPUP*/
function openPop(elem) {
	const popEls = document.querySelectorAll(".popup-box");
	popEls.forEach((popItem, idx) => {
		popItem.classList.remove("on");
	});
	let popData = elem.dataset.popname;
	let popName = "#" + popData;
	let popNameEl = document.querySelector(popName);
	popNameEl.classList.add("on");
}

const popCont = document.querySelectorAll(".popup-content");
popCont.forEach((item, idx) => {
	item.addEventListener("mouseleave", () => {
		let parentEl = item.parentNode;
		parentEl.classList.remove("on");
	});
});
