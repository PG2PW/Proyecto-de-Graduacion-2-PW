function mask(id){
  const elm = document.getElementById(id);
  const suffix = ' %';
  const bypass = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93];
  
  const saveValue = (data) => {
    elm.dataset.value = data;
  };
  
  const pureValue = () => {
    let value = elm.value.replace(/\D/g, '');
    value = parseInt(value.replace(suffix, ''))
    return value || '';
  };
  
  const focusNumber = () => {
    elm.setSelectionRange(elm.dataset.value.length, elm.dataset.value.length);
  };
  
  elm.addEventListener('keyup', (e) => {
    if (bypass.indexOf(e.keyCode) !== -1) return;
    
    const pure = pureValue();
    saveValue(pure);
    
    if (!pure) {
      elm.value = '';
      return;
    }

    elm.value = pure + suffix;
    focusNumber();
  });
}
mask('porcentaje');