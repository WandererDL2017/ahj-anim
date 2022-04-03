import Button from './Button';
import Popup from './Popup';

const textPopup = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  `;
const example = document.querySelector('.example');
const button = new Button('button', 'btn btn-primary');
const popup = new Popup(textPopup);
const buttonPrimary = example.appendChild(button.createButton());
example.appendChild(popup.createPopup('popup', 'popup__text'));

buttonPrimary.addEventListener('click', () => {
  const contentBlock = document.querySelector('#popup');
  contentBlock.classList.toggle('popup__active');
});
