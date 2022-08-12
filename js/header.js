document.addEventListener("DOMContentLoaded", () => {
	DropdownMenu.init();
});

// DROP DOWN MENU
class DropdownMenu {
	constructor(selector) {
		this.button = selector;
		const targetId = this.button.dataset.menu;
		this.target = document.getElementById(targetId);
		if (this.target === null) {
			return;
		} else {
			this.content = this.target.children[0];
			this.contentHeight = this.content.clientHeight;
			this.listItems = this.content.querySelectorAll("li");
			this.handleEvent();
		}
	}
	handleEvent() {
		this.button.addEventListener("mouseover", () => {
			this.open();
		});
		this.button.addEventListener("focusin", () => {
			this.open();
		});
		this.button.addEventListener("mouseout", () => {
			this.close();
		});
		this.button.addEventListener("focusout", () => {
			this.close();
		});
	}
	open() {
		this.listItems.forEach((listItem, idx) => {
			let delay = 0.1 + idx * 0.03;
			listItem.style.animationDelay = `${delay}s`;
		});
		this.button.classList.add("on");
	}
	close() {
		this.button.classList.remove("on");
	}
}

DropdownMenu.init = function () {
	const menus = document.querySelectorAll("[data-menu]");
	menus.forEach(menu => {
		menu.classList.remove("on");
		new DropdownMenu(menu);
	});
};
