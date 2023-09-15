export default function CustomInput({titleLabel,placeholderLabel}) {
    const div = document.createElement('div');
    div.classList = 'grupo';
  
    div.innerHTML = `
          <label class="inputTitle">${titleLabel}</label>
          <input class="formInput" placeholder='${placeholderLabel}' />        
      `;
  
    return div;
}
