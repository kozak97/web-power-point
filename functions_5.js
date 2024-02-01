let keyDownCount = 0;
let keyDownR=0
let menuAll = document.querySelector('.menu_all');
document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key === 'h') {
        if (keyDownCount===0){
            menuAll.style.display='none';
            keyDownCount++;
        }else if (keyDownCount===1){
            menuAll.style.display='block';
            keyDownCount=0
        }
    }
    if (event.altKey && event.key === 'r') {
        let write = document.querySelector('.total_page')
        let childWrite = write.firstElementChild;
        if (keyDownR===0){
            childWrite.innerHTML=`Alt+h---відкриває меню з створення фігур. </br>
            Alt+r---Відкриває підказки.`
            childWrite.style.display='block';
            keyDownR++
        }else if (keyDownR===1){
            keyDownR=0;
            childWrite.style.display='none';
        }
    }
});

let deletButton = document.querySelector('.button_one_bottom')
deletButton.addEventListener('click', function(){
    let deleteObjeckt = document.querySelector(`.${document.title}`);
    let excludedClasses = ['total_page', 'menu', 'write','menu_all', 'heder_menu',
    'button_one', 'button_two','button_three', 'variant_menu',
    'border_div','text','numberInput','slider','numberInput_1',
    'slider_1','numberInput_2','slider_2','numberInput_3',
    'slider_3','numberInput_4','slider_4','colorPicker','numberInput_5',
    'slider_5','colorPicker_1','numberInput_6','slider_6','numberInput_7',
    'slider_7','numberInput_8','slider_8','numberInput_10','slider_10',
    'colorPicker_2','numberInput_9','slider_9','variant_menu2',
    'imageInput','buttonImg','textarea_name','numberInput11',
    'slider11','checkboxInput1','numberInput12','slider12',
    'checkboxInput2','checkboxInput3','checkboxInput4','checkboxInput5',
    'fontSelector','bottom_menu','button_one_bottom','button_two_bottom',
    'button_three_bottom','buttonArea','colorPicker_4','menu','variant_menu3','textFuntions',
    'elementInput','elemetnAddText','position','textMovePX','textMovePY','textMoveNX','textMoveNY','ButtonAddMove',
    'ButtonReset','ButtonActions','textMoveS','checkboxInput','elemet_0',
    'addElement_0','elemet_1','addElement_1','elemet_2','addElement_3',
    'elemet_3','addElement_2','createFunctionTouch'];

    if (!excludedClasses.includes(deleteObjeckt.className)) {
        deleteObjeckt.remove();
        document.title='total_page';
    } else {
        document.title='total_page';
        pass
    }
})

let countCopy = 0;
let elementCopy;
let cloneElement;
let copyBtn = document.querySelector('.button_two_bottom');
let NewCopyClass = 0;

copyBtn.addEventListener('click', function () {
  if (countCopy === 0) {
    elementCopy = document.querySelector(`.${document.title}`);
    if (elementCopy) {
      cloneElement = elementCopy.cloneNode(true);
      countCopy = 1 - countCopy;
      copyBtn.style.backgroundImage = "url('./img/paste.png')"
    } else {
      console.error('Елемент для копіювання не знайдено.');
    }
  } else if (countCopy === 1) {
    if (cloneElement) {
      let classElemCopy = cloneElement.className;
      cloneElement.classList.remove(`${classElemCopy}`);
      cloneElement.classList.add(`ElementCopy_${NewCopyClass}`);
      elementCopy = document.querySelector(`.${document.title}`);
      copyBtn.style.backgroundImage = "url('./img/copy.png')"

      if (elementCopy) {
        elementCopy.append(cloneElement);
        countCopy = 1 - countCopy;
        NewCopyClass++;
      } else {
        console.error('Цільовий елемент для вставлення не знайдено.');
      }
    }
  }
});
