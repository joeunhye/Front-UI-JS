const accordion = document.querySelector(".accordion");
const accordionItems = document.querySelectorAll(".accordion .item");
const accordionBtn = document.querySelectorAll(".accordionTitle");

const accordionContents = document.querySelectorAll(".accordion-cont");
const accIcon = document.querySelectorAll(".accIcon");

accordion.addEventListener("click", e => {
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

// // variables
// var accordionBtn = document.querySelectorAll('.accordionTitle');
// var allTexts = document.querySelectorAll('.text');
// var accIcon = document.querySelectorAll('.accIcon');

// // event listener
// accordionBtn.forEach(function (el) {
//     el.addEventListener('click', toggleAccordion)
// });

// // function
// function toggleAccordion(el) {
//    var targetText = el.currentTarget.nextElementSibling.classList;
//    var targetAccIcon = el.currentTarget.children[0];
//    var target = el.currentTarget;

//    if (targetText.contains('show')) {
//        targetText.remove('show');
//        targetAccIcon.classList.remove('anime');
//        target.classList.remove('accordionTitleActive');
//    }
//    else {
//       accordionBtn.forEach(function (el) {
//          el.classList.remove('accordionTitleActive');

//          allTexts.forEach(function (el) {
//             el.classList.remove('show');
//          })

//          accIcon.forEach(function (el) {
//           el.classList.remove('anime');
//          })

//       })

//          targetText.add('show');
//          target.classList.add('accordionTitleActive');
//          targetAccIcon.classList.add('anime');
//    }
// }
//https://codepen.io/rafaelavlucas/pen/zyVXYV
