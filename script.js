window.onload = () => {
  
  const button = document.querySelector('.btn-custom');
  const inputCode = document.querySelector('.input-code');
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(input => {
    // ketika mengetikkan input
    input.addEventListener('keyup', function() {
      // dapatkan semua value input
      const value = inputValue();
      // jalankan fungsi setValue dan masukkan hasilnya kedalam input code
      inputCode.value = setValue(value);
      // jalankan fungsi stylingButton()
      stylingButton(value);
    });
  });
  
  function inputValue() {
    return {
      // value input text
      text: document.querySelector('#text').value.trim(),
      // value input font size
      fontSize: document.querySelector('#font-size').value.trim(),
      // value input font weight
      fontWeight: document.querySelector('#font-weight').value.trim(),
      // value input font color
      fontColor: document.querySelector('#font-color').value.trim(),
      // value input letter spacing
      letterSpacing: document.querySelector('#letter-spacing').value.trim(),
      // value input padding top
      paddingTop: document.querySelector('#padding-top').value.trim(),
      // value input padding right
      paddingRight: document.querySelector('#padding-right').value.trim(),
      // value input padding bottom
      paddingBottom: document.querySelector('#padding-bottom').value.trim(),
      // value input padding left
      paddingLeft: document.querySelector('#padding-left').value.trim(),
      // value input range horizontal
      horizontal: document.querySelector('#horizontal').value,
      // value input range vertical
      vertical: document.querySelector('#vertical').value,
      // value input range blur
      blur: document.querySelector('#blur').value,
      // value input range spread
      spread: document.querySelector('#spread').value,
      // value input shadow color
      shadowColor: document.querySelector('#shadow-color').value.trim(),
      // value input border
      border: document.querySelector('#border').value.trim(),
      // value input range border radius
      borderRadius: document.querySelector('#border-radius').value,
      // value input background color
      backgroundColor: document.querySelector('#bg-color').value.trim()
    }
  }
  
  function setValue(param) {
    return `
    .button {
      position: relative;
      font-size: ${!param.fontSize ? '14px' : param.fontSize + 'px'};
      font-weight: ${!param.fontWeight ? '400' : param.fontWeight};
      color: ${!param.fontColor ? 'black' : param.fontColor};
      letter-spacing: ${!param.letterSpacing ? '0' : param.letterSpacing + 'px'};
      padding: ${getPadding(param)};
      box-shadow: ${getBoxShadow(param)};
      border: ${!param.border ? '1px solid black' : param.border + 'px solid black'};
      border-radius: ${!param.borderRadius ? '0' : param.borderRadius + '%'};
      background: ${!param.backgroundColor ? 'silver' : param.backgroundColor};
      overflow: hidden;
    }
    `;
  }
  
  function getPadding({paddingTop: pt, paddingRight: pr, paddingBottom: pb, paddingLeft: pl}) {
    // set padding
    return `${pt}px ${pr}px ${pb}px ${pl}px`;
  }
  
  function getBoxShadow({horizontal: hr, vertical: vc, blur: bl, spread: sr, shadowColor: color}) {
    // set box shadow
    return `${hr}px ${vc}px ${bl}px ${sr}px ${color}`;
  }
  
  const inputRange = document.querySelectorAll('.range');
  inputRange.forEach(range => {
    // ketika input range digeser
    range.addEventListener('input', function() {
      // jalankan fungsi setValueLength()
      setValueLength(this);
      // dapatkan semua value input
      const value = inputValue();
      // jalankan fungsi setValue() dan masukkan hasilnya kedalam input code
      inputCode.value = setValue(value);
      // jalankan fungsi stylingButton()
      stylingButton(value);
    });
  });
  
  function setValueLength(param) {
    // dapatkan element dengan class label-range
    const element = param.previousElementSibling.children;
    const label = element[element.length - 1];
    // set value input range ke element label-range
    label.textContent = param.value;
  }
  
  function stylingButton(param) {
    // mengatur teks tombol
    button.textContent = !param.text ? 'default text' : param.text;
    // mengatur position tombol
    button.style.position = 'relative';
    // mengatur ukuran teks tombol
    button.style.fontSize = !param.fontSize ? '14px' : param.fontSize + 'px';
    // mengatur ketebalan teks tombol
    button.style.fontWeight = !param.fontWeight ? '400' : param.fontWeight;
    // mengatur warna teks tombol
    button.style.color = !param.fontColor ? 'black' : param.fontColor;
    // mengatur jarak antar huruf tombol
    button.style.letterSpacing = !param.letterSpacing ? '0' : param.letterSpacing + 'px';
    // mengatur padding tombol
    button.style.padding = getPadding(param);
    // mengatur bayangan tombol
    button.style.boxShadow = getBoxShadow(param);
    // mengatur border tombol
    button.style.border = !param.border ? '1px solid black' : param.border + 'px solid black';
    // mengatur border radius tombol
    button.style.borderRadius = !param.borderRadius ? '0' : param.borderRadius + '%';
    // mengatur warna background tombol
    button.style.background = !param.backgroundColor ? 'silver' : param.backgroundColor;
    // mengatur overflow tombol
    button.style.overflow = 'hidden';
  }
  
  // salin kode
  const copyButton = document.querySelector('.btn-copy');
  copyButton.addEventListener('click', () => {
    // jika input code kosong
    if (!inputCode.value) return alerts('error', 'Alert', 'field is empty!');
    // ambil value input code
    inputCode.select();
    // salin
    document.execCommand('copy');
    // tampilkan pesan berhasil disalin
    alerts('success', 'Success', 'code has been copied!');
  });
  
  function alerts(icon, title, text, position = 'center') {
    // plugin sweetalert2
    swal.fire ({
      position: position,
      icon: icon,
      title: title,
      text: text
    });
  }
  
}