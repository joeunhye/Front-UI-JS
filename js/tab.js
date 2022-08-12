document.addEventListener("DOMContentLoaded", function () {
	//TAB
	new Tab("#tab1");
	new Tab("#tab2");
});

/*TAB*/
class Tab {
	constructor(selector, option) {
		const defaultOtp = {
			btns: "ul",
			boxs: ".tab-contents .tab-content",
			activeClass: "on",
		};
		const resultOtp = { ...defaultOtp, ...option };
		this.frame = document.querySelector(selector);
		this.btns = this.frame.querySelector(resultOtp.btns);
		this.boxs = this.frame.querySelectorAll(resultOtp.boxs);
		this.activeClass = resultOtp.activeClass;
		this.bindingEvent();
	}

	bindingEvent() {
		this.btns.addEventListener("click", e => {
			let target = e.target.closest("li");
			let isOn = target.classList.contains(this.activeClass);
			if (isOn) return;
			const nodes = [...target.parentElement.children];
			const index = nodes.indexOf(target);
			this.activation(nodes, index);
		});
	}

	activation(items, index) {
		items.forEach(el => el.classList.remove(this.activeClass));
		items[index].classList.add(this.activeClass);
		this.boxs.forEach(el => el.classList.remove(this.activeClass));
		this.boxs[index].classList.add(this.activeClass);
	}
}
