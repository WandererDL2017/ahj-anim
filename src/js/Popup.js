export default class Popup {
  constructor(contentText) {
    this.contentText = contentText;
  }

  createPopup(popupClassName, contentClassName) {
    const popup = document.createElement('div');
    const content = document.createElement('p');
    popup.setAttribute('id', 'popup');
    popup.appendChild(content);
    popup.className = popupClassName;
    content.className = contentClassName;
    content.textContent = this.contentText;
    return popup;
  }
}
