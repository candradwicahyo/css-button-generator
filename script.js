window.addEventListener('DOMContentLoaded', () => {
  
  const vConsole = new VConsole();
  
  const textarea = document.querySelector('.textarea');
  const button = document.querySelector('.button');
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(input => {
    input.addEventListener('keyup', () => {
      const data = allInputValue();
      stylingButton(data);
      textarea.value = setValue(data);
    });
  });
  
  function allInputValue() {
    let text = document.querySelector('#text').value.trim();
    let fontColor = document.querySelector('#font-color').value.trim();
    let fontWeight = document.querySelector('#font-weight').value.trim();
    let fontSize = document.querySelector('#font-size').value.trim();
    let border = document.querySelector('#border').value.trim();
    let borderRadius = document.querySelector('#border-radius').value.trim();
    let pt = document.querySelector('#pt').value.trim();
    let pr = document.querySelector('#pr').value.trim();
    let pb = document.querySelector('#pb').value.trim();
    let pl = document.querySelector('#pl').value.trim();
    let bsColor = document.querySelector('#bs-color').value.trim();
    let hor = document.querySelector('#hor').value.trim();
    let ver = document.querySelector('#ver').value.trim();
    let blur = document.querySelector('#blur').value.trim();
    let spread = document.querySelector('#spread').value.trim();
    let bgColor = document.querySelector('#bg-color').value.trim();
    return {
      text: text,
      fontColor: fontColor,
      fontWeight: fontWeight,
      fontSize: fontSize,
      border: border,
      borderRadius: borderRadius,
      pt: pt,
      pr: pr,
      pb: pb,
      pl: pl,
      bsColor: bsColor,
      hor: hor,
      ver: ver,
      blur: blur,
      spread: spread,
      bgColor: bgColor
    }
  }
  
  const inputFontColor = document.querySelector('#font-color');
  const inputColor = document.querySelector('#input-color');
  inputColor.addEventListener('change', function() {
    inputFontColor.value = this.value;
    button.style.color = this.value;
    const data = allInputValue();
    textarea.value = setValue(data);
  });
  
  inputFontColor.addEventListener('keyup', function() {
    const value = this.value.trim();
    inputColor.value = this.value.trim();
  });
  
  function stylingButton(data) {
    button.textContent = !data.text ? 'click here' : data.text;
    button.style.color = !data.fontColor ? '#000' : data.fontColor;
    button.style.fontSize = !data.fontSize ? '13px' : `${data.fontSize}px`;
    button.style.fontWeight = !data.fontWeight ? '400' : `${data.fontWeight}`;
    button.style.border = !data.border ? 'none' : `${data.border}px solid black`;
    button.style.borderRadius = !data.borderRadius ? '0' : `${data.borderRadius}px`;
    button.style.padding = `${data.pt}px ${data.pr}px ${data.pb}px ${data.pl}px`;
    button.style.boxShadow = `${data.hor}px ${data.ver}px ${data.blur}px ${data.spread}px ${data.bsColor}`;
    button.style.background = !data.bgColor ? 'none' : data.bgColor;
  }
  
  const inputBackground = document.querySelector('#bg-color');
  const generate = document.querySelector('.generate');
  generate.addEventListener('click', () => {
    inputBackground.value = randomHexColor();
    button.style.background = randomHexColor();
    const data = allInputValue();
    textarea.value = setValue(data);
  });
  
  function randomHexColor() {
    let str = 'abcdef0123456789';
    let result = '#';
    for (let i = 0; i < 6; i++) {
      result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
  }
  
  function setValue(data) {
    return `
    .button {
      color: ${!data.fontColor ? '#000' : data.fontColor};
      font-size: ${!data.fontSize ? '13px' : `${data.fontSize}px`};
      font-weight: ${!data.fontWeight ? '400' : data.fontWeight};
      border: ${!data.border ? 'none' : `${data.border}px solid black`};
      border-radius: ${!data.borderRadius ? '0' : `${data.borderRadius}px`};
      padding: ${`${data.pt}px ${data.pr}px ${data.pb}px ${data.pl}px`};
      box-shadow: ${`${data.hor}px ${data.ver}px ${data.blur}px ${data.spread}px ${data.bsColor}`}
      background: ${!data.bgColor ? '#f3f3f3' : data.bgColor};
    }
    `;
  }
  
  const copyButton = document.querySelector('.copy');
  copyButton.addEventListener('click', () => {
    if (textarea.value) {
      textarea.select();
      document.execCommand('copy');
      alert('code has been copied!');
    }
  });
  
});