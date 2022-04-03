export default class Button {
  constructor(name, style) {
    this.name = name;
    this.style = style;
  }

  createButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = this.style;
    button.textContent = this.name;
    return button;
  }
}
