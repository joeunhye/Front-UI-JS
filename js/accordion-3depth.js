const accordion2 = document.querySelector(".accordion-3-depth");
const accordionDepth1Items2 = document.querySelectorAll(".accordion-3-depth .depth-1-item");

const accordionContents2 = document.querySelectorAll(".depth-1-content");
const accIcon2 = document.querySelectorAll(".accIcon");

accordion2.addEventListener("click", e => {
	const target = e.target.closest("li");
	toggleAccordion(target);
});

function toggleAccordion(targetEl) {
	const targetContent = targetEl.classList;

	if (targetContent.contains("on")) {
		targetEl.classList.remove("on");
	} else {
		accordionItems.forEach(item => item.classList.remove("on"));
		targetEl.classList.add("on");
	}
}
