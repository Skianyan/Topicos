export default function CustomInput({titleLabel,placeholderLabel}) {
    const div = document.createElement('div');
    div.classList = 'grupo';
  
    div.innerHTML = `
          <label>${titleLabel}</label>
          <input placeholder='${placeholderLabel}' />        
      `;
  
    return div;
}
