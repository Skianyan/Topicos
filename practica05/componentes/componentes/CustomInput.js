export default function CustomInput({titleLabel,placeholderLabel,id}) {
    const div = document.createElement('div');
    div.classList = 'grupo';
  
    div.innerHTML = `
          <label for=${id} class="inputTitle">${titleLabel}</label>
          <input id=${id} class="formInput" placeholder='${placeholderLabel}' />        
      `;
  
    return div;
}
