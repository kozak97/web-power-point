

let count_class=0;
let button_two = document.querySelector('.button_two');
button_two.addEventListener('click', add_elemetn);

function add_elemetn (){

  let r=0;
  let g=0;
  let b=0;
  function hexToRgba(hex) {
    hex = hex.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
  }
  let shadow_x = document.querySelector('.numberInput_6').value;
  let shadow_y = document.querySelector('.numberInput_7').value;
  let shadow_blur = document.querySelector('.numberInput_8').value;
  let shadow_size = document.querySelector('.numberInput_10').value;
  let shadow_color = document.querySelector('.colorPicker_2').value;
  hexToRgba(shadow_color);
  let shadow_opasity = document.querySelector('.numberInput_9').value
  let width = document.querySelector('.numberInput').value;
  let height = document.querySelector('.numberInput_1').value;
  let border_radius = document.querySelector('.numberInput_2').value;
  let rotation = document.querySelector('.numberInput_3').value;
  let border = document.querySelector('.numberInput_4').value;
  let color_border = document.querySelector('.colorPicker').value;
  let shar = document.querySelector('.numberInput_5').value;
  let background_color = document.querySelector('.colorPicker_1').value;
  let newElement = document.createElement("div");
  newElement.className=`Element_${count_class}`
  newElement.style.cssText=`
  position: absolute;
  left: 0px;
  width: ${width}px;
  height: ${height}px;
  border: ${border}px solid ${color_border};
  border-radius: ${border_radius}px;
  background-color: ${background_color};
  transform: rotate(${rotation}deg);
  z-index: ${shar};
  box-shadow: ${shadow_x}px ${shadow_y}px ${shadow_blur}px ${shadow_size}px rgba(${r}, ${g}, ${b}, 0.${shadow_opasity});
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: center;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;
  let perent_element_clik = document.title
  let perntElement = document.querySelector(`.${perent_element_clik}`);
  let p = document.createElement('p')
  p.className='fontStyle';
  newElement.appendChild(p);
  perntElement.appendChild(newElement);
  count_class++

}


