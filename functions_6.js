
let previosX;
let previosY;
let speed;
let clickAny='total_page';
let excludedClassesMoveF = ['write','menu_all', 'heder_menu',
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
    'button_three_bottom','buttonArea','menu', 'variant_menu3','textFuntions',
    'elementInput','elemetnAddText','position','textMovePX','textMovePY','textMoveNX','textMoveNY','ButtonAddMove',
    'ButtonReset','ButtonActions','textMoveS','checkboxInput'];


function clickAnyElementClick(event) {
  let elAny = event.target;
  let classAny = elAny.className
  if (!excludedClassesMoveF.includes(classAny)){
    clickAny=elAny;
  }
  previosX = document.querySelector('.textMovePX')
  previosY = document.querySelector('.textMovePY')
  speed=document.querySelector('.textMoveS')
  previosX.value=clickAny.offsetLeft;
  previosY.value=clickAny.offsetTop;
}
document.addEventListener('click', clickAnyElementClick);

let PreviosMoveObject = {
}
let NextMoveObject = {
}

let ButtonAddP = document.querySelector('.ButtonReset')
ButtonAddP.addEventListener('click', function(){
  let classObject = clickAny.className
  PreviosMoveObject[classObject] = [`${classObject}`, parseInt(previosX.value), parseInt(previosY.value), parseInt(speed.value)];
})
let ButtonAddN = document.querySelector('.ButtonActions')
ButtonAddN.addEventListener('click', function(){
  let classObject = clickAny.className
  NextMoveObject[classObject] = [`${classObject}`, parseInt(previosX.value), parseInt(previosY.value), parseInt(speed.value)];
})
let buttonGroupC=0;
let buttoM=0;
document.addEventListener('keydown', function (event) {
    let elementMove = document.title;
    let elementMoveSelector = document.querySelector(`.${elementMove}`);
    let list=[]
    if(event.altKey && event.key === 'm'){
      if (buttoM==0){
        list = NextMoveObject[elementMove]
        buttoM++;
      }else if(buttoM==1){
        list = PreviosMoveObject[elementMove]
        buttoM=0;
      }
      
      moveObjectTo(list[1], list[2], elementMoveSelector, list[3]); 

    // }else if(event.altKey && event.key === 'n'){
    //   list = NextMoveObject[elementMove]
    //   moveObjectTo(list[1], list[2], elementMoveSelector, list[3]); 

    }else if (event.altKey && event.key === 'g'){
      let listGroup = elementMoveSelector.children;

      for (let i = 0; i < listGroup.length; i++) {
        let className = listGroup[i].className;
      
        if (className.includes('fontStyle')) {
          continue;
        }
      
        let list;
        if (buttonGroupC === 0) {
          list = NextMoveObject[className];
        } else if (buttonGroupC === 1) {
          list = PreviosMoveObject[className];
        }
      
        let elementMoveSelector = document.querySelector(`.${className}`);
        moveObjectTo(list[1], list[2], elementMoveSelector, list[3]);
      }
      
      // Збільшення тут, поза циклом
      buttonGroupC++;
      // Перевірка для повторного встановлення на початкове значення 0 або 1
      if (buttonGroupC > 1) {
        buttonGroupC = 0;
      }
    }
    function moveObjectTo(destinationX, destinationY, object, sp) {
            // Отримуємо поточні координати об'єкта
            let currentX = object.offsetLeft;
            let currentY = object.offsetTop;
          
            // Визначаємо відстань, яку потрібно пройти
            let distanceX = destinationX - currentX;
            let distanceY = destinationY - currentY;
          
            // Задаємо кількість кроків і час, протягом якого триватиме рух
            let steps = sp; // Кількість кроків
            let duration = 1000; // Час у мілісекундах
          
            // Розраховуємо величину кроку для кожного напрямку
            let stepX = distanceX / steps;
            let stepY = distanceY / steps;
          
            // Запускаємо анімацію руху
            let stepCount = 0;
            function animate() {
              currentX += stepX;
              currentY += stepY;
          
              object.style.left = currentX + 'px';
              object.style.top = currentY + 'px';
          
              stepCount++;
          
              if (stepCount < steps) {
                requestAnimationFrame(animate);
              }
            }
          
            animate();
    }
});



