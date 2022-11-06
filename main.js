
const inputFields = document.querySelectorAll('input');
const contentEditableFields = document.querySelectorAll('span.editable');
const toggleBtn = document.querySelector('.toggle');
const enableText = 'Enable editable fields';
const disableText = 'Disable editable fields';

/**
 * @method toggleInputEditable
 * Enable and disable input fields in a page based on a web form
 */
const toggleInputEditable = () => {
    inputFields.forEach(el => el.toggleAttribute('disabled'));
    contentEditableFields.forEach(el => el.toggleAttribute('contentEditable'));
}

const toggleButtonText = (e) => {
    if (e.target.textContent === enableText) {
        e.target.innerHTML = disableText;
        e.target.classList.remove('disable');
    } else {
        e.target.innerHTML = enableText;
        e.target.classList.add('disable');
    }
}

// Event listeners
toggleBtn.addEventListener('click', (e) => {
    toggleInputEditable();
    toggleButtonText(e);
})

