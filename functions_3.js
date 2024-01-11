function track_title(){
    let title = document.title;
    let elemetn_chenge = document.querySelector(`.${title}`)
    if (title!='menu'){
      return elemetn_chenge;
    }
}

// let button_hover = document.querySelector('.button_two_bottom');
// button_hover.addEventListener('click', function(){
//   console.log('button')
// })


let range = document.querySelector('.slider');
range.addEventListener('input', function(){
  let width_slider = document.querySelector('.numberInput').value;
  track_title().style.width=`${width_slider}px`
})
let number_chenge = document.querySelector('.numberInput');
number_chenge.addEventListener('input', function(){
  let width_number = document.querySelector('.numberInput').value;
  track_title().style.width=`${width_number}px`
})


let range_one = document.querySelector('.slider_1');
range_one.addEventListener('input', function(){
  let height_slider_one = document.querySelector('.numberInput_1').value;
  track_title().style.height=`${height_slider_one}px`
})
let number_chenge_one = document.querySelector('.numberInput_1');
number_chenge_one.addEventListener('input', function(){
  let height_number_one = document.querySelector('.numberInput_1').value;
  track_title().style.height=`${height_number_one}px`
})

let range_two = document.querySelector('.slider_2');
range_two.addEventListener('input', function(){
  let radius_slider_two = document.querySelector('.numberInput_2').value;
  track_title().style.borderRadius=`${radius_slider_two}px`
})
let number_chenge_two = document.querySelector('.numberInput_2');
number_chenge_two.addEventListener('input', function(){
  let radius_number_two = document.querySelector('.numberInput_2').value;
  track_title().style.borderRadius=`${radius_number_two}px`
})


let range_three = document.querySelector('.slider_3');
range_three.addEventListener('input', function(){
  let rotation_slider_three = document.querySelector('.numberInput_3').value;
  track_title().style.transform = `rotate(${rotation_slider_three}deg)`; 
});

let number_chenge_three = document.querySelector('.numberInput_3');
number_chenge_three.addEventListener('input', function(){
  let rotation_number_three = document.querySelector('.numberInput_3').value;
  track_title().style.transform = `rotate(${rotation_number_three}deg)`; 
});




let range_four = document.querySelector('.slider_4');
let colorborder;
range_four.addEventListener('input', function () {
    colorborder = document.querySelector('.colorPicker').value;
    let border_slider_four = document.querySelector('.numberInput_4').value;
    track_title().style.border = `${border_slider_four}px solid ${colorborder}`; 
});

let number_chenge_four = document.querySelector('.numberInput_4');
number_chenge_four.addEventListener('input', function () {
    colorborder = document.querySelector('.colorPicker').value;
    let border_number_four = document.querySelector('.numberInput_4').value;
    track_title().style.border = `${border_number_four}px solid ${colorborder}`; 
});

let border_color = document.querySelector('.colorPicker');
border_color.addEventListener('input', function(){
    border_color_chenge =  document.querySelector('.colorPicker').value;
    track_title().style.borderColor = `${border_color_chenge}`;
})





let range_five = document.querySelector('.slider_5');
range_five.addEventListener('input', function(){
  let layer_slider_five = document.querySelector('.numberInput_5').value;
  track_title().style.zIndex = `${layer_slider_five}`; 
});

let number_chenge_five = document.querySelector('.numberInput_5');
number_chenge_five.addEventListener('input', function(){
  let layer_number_five = document.querySelector('.numberInput_5').value;
  track_title().style.zIndex = `${layer_number_five}`; 
});


let colorBaground = document.querySelector('.colorPicker_1');
colorBaground.addEventListener('input', function () {
    let colorChengeBaground = document.querySelector('.colorPicker_1').value;
    track_title().style.backgroundColor = `${colorChengeBaground}`; 
});



let red = 0;
let green = 0;
let blue = 0;
function hexToRgba(hex) {
  hex = hex.replace(/^#/, '');
  let bigint = parseInt(hex, 16);
  red = (bigint >> 16) & 255;
  green = (bigint >> 8) & 255;
  blue = bigint & 255;
  // Зараз ми додаємо альфа-канал, який може бути налаштований вручну
  let alpha = 1.0;
}

let range_six = document.querySelector('.slider_6');
let range_seven =document.querySelector('.slider_7');
let range_eight =document.querySelector('.slider_8');
let range_nine =document.querySelector('.slider_9');
let range_ten =document.querySelector('.slider_10');
let range_color = document.querySelector('.colorPicker_2');

range_six.addEventListener('input', chenge_shodeow);
range_seven.addEventListener('input', chenge_shodeow);
range_eight.addEventListener('input', chenge_shodeow);
range_ten.addEventListener('input', chenge_shodeow);
range_nine.addEventListener('input', chenge_shodeow);
range_color.addEventListener('input', chenge_shodeow);

function chenge_shodeow(){
  let shadow_s_x=document.querySelector('.numberInput_6').value;
  let shadow_s_y=document.querySelector('.numberInput_7').value;
  let shadow_s_b=document.querySelector('.numberInput_8').value;
  let shadow_s_o=document.querySelector('.numberInput_9').value;
  let shadow_s_z=document.querySelector('.numberInput_10').value;
  let shadow_s_c=document.querySelector('.colorPicker_2').value;
  hexToRgba(shadow_s_c);
  console.log(shadow_s_c)

  track_title().style.boxShadow = `${shadow_s_x}px ${shadow_s_y}px ${shadow_s_b}px ${shadow_s_z}px rgba(${red}, ${green}, ${blue}, 0.${shadow_s_o})`; 
}


// меню2
// let textArea = document.querySelector('.textarea_name');
// textArea.addEventListener('input', function(){
//   let contentTextArea = textArea.value
//   track_title().textContent=contentTextArea;
// });

let butArea = document.querySelector('.buttonArea');
butArea.addEventListener('click', function(){
  let textArea = document.querySelector('.textarea_name');
  let contentTextArea = textArea.value;
  let text_add = track_title().firstElementChild;
  text_add.innerText=contentTextArea;
  textArea.value=''
})





let range_eleven = document.querySelector('.slider11');
range_eleven.addEventListener('input', function(){
  let font_slider_eleven = document.querySelector('.numberInput11');
  font_slider_eleven.value=range_eleven.value
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  childElement.style.fontSize=`${font_slider_eleven.value}px`
})

let number_chenge_elven = document.querySelector('.numberInput11');
number_chenge_elven.addEventListener('input', function(){
  let font_number = document.querySelector('.numberInput11').value;
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  childElement.style.fontSize=`${font_number}px`
})



let range_twel = document.querySelector('.slider12');
range_twel.addEventListener('input', function(){
  let bol_number_twel = document.querySelector('.numberInput12');
  bol_number_twel.value=range_twel.value;
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  childElement.style.fontWeight=`${range_twel.value}`
});

let number_chenge_twel = document.querySelector('.numberInput12');
number_chenge_twel.addEventListener('input', function(){
  let bol_number_twel = document.querySelector('.numberInput12').value;
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  childElement.style.fontWeight=`${bol_number_twel}`
});

let checkBox = document.querySelector('.checkboxInput1');
checkBox.addEventListener('change', function(){
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  if (checkBox.checked) {
    childElement.style.fontStyle=`italic`;
} else {
  childElement.style.fontStyle=`normal`;
}
})

let fontFamily = document.querySelector('.fontSelector')
fontFamily.addEventListener('change', function(){
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  let font = fontFamily.value;
  childElement.style.fontFamily = font;
})

let c_img = 0
let img = document.querySelector('.buttonImg');

img.addEventListener('click', function () {
    let newElementImg = document.createElement("img");
    newElementImg.className = `IMG_${c_img}`;
    track_title().appendChild(newElementImg);
    c_img++;

    let input = document.querySelector('.imageInput');

    // Перевірка, чи обрано файл
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        // Спрацьовує, коли завантаження зображення завершиться
        reader.onload = function (e) {
            // Встановлюємо src для нового зображення (newElementImg)
            newElementImg.src = e.target.result;
        };
        // Завантаження зображення
        reader.readAsDataURL(input.files[0]);
    }
});

let checkBox2 = document.querySelector('.checkboxInput2');
checkBox2.addEventListener('change', function(){
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  if (checkBox2.checked) {
    childElement.style.textAlign='center';
}
})

let checkBox3 = document.querySelector('.checkboxInput3');
checkBox3.addEventListener('change', function(){
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  if (checkBox3.checked) {
    childElement.style.textAlign=`left`;
}
})

let checkBox4 = document.querySelector('.checkboxInput4');
checkBox4.addEventListener('change', function(){
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  if (checkBox4.checked) {
    childElement.style.textAlign=`right`;
}
})

let checkBox5 = document.querySelector('.checkboxInput5');
checkBox5.addEventListener('change', function(){
  let childElementFont = track_title();
  let childElement = childElementFont.firstElementChild;
  if (checkBox5.checked) {
    childElement.style.textAlign=`justify`;
}
})

let textColor = document.querySelector('.colorPicker_4');
textColor.addEventListener('input', function(){
    textColorChenge =  document.querySelector('.colorPicker_4').value;
    let childElementFont = track_title();
    let childElement = childElementFont.firstElementChild;
    childElement.style.color = textColorChenge;
    
})