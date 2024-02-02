
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
    'ButtonReset','ButtonActions','textMoveS','checkboxInput', 'button_label','elemet_0',
    'addElement_0','elemet_1','addElement_1','elemet_2','addElement_2',
    'elemet_3','addElement_3','createFunctionTouch'];


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
        list = NextMoveObject[elementMove];
        buttoM++;
      }else if(buttoM==1){
        list = PreviosMoveObject[elementMove]
        buttoM=0;
      }
      
      moveObjectToM(list[1], list[2], elementMoveSelector, list[3]); 
 

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
          if(list == undefined){
            continue;
          }
        } else if (buttonGroupC === 1) {
          list = PreviosMoveObject[className];
          if(list == undefined){
            continue;
          }
        }
      
        let elementMoveSelector = document.querySelector(`.${className}`);
        moveObjectToG(list[1], list[2], elementMoveSelector, list[3]);
      }
      
      // Збільшення тут, поза циклом
      buttonGroupC++;
      // Перевірка для повторного встановлення на початкове значення 0 або 1
      if (buttonGroupC > 1) {
        buttonGroupC = 0;
      }
    }
    function moveObjectToG(destinationX, destinationY, object, sp) {
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
                // відстеження торкання
                let test=document.title;
                
                let childrenElementTouch = document.querySelector(`.${test}`).children;
                for (let i =0; i<=childrenElementTouch.length; i++){
                  if(childrenElementTouch[i]==undefined){
                    continue;
                  }
                  if(childrenElementTouch[i].className in ObjectFunctionTouch){
                    let elementTest = childrenElementTouch[i].className;
                    if (!excludedClassesMoveF.includes(elementTest)){
                      if (elementTest in ObjectFunctionTouch){
                        let key = elementTest;
                        if (moveSpace(ObjectFunctionTouch[key][0],ObjectFunctionTouch[key][1])) {
                          ObjectFunctionTouch[key][2].style.display = 'none';
                          ObjectFunctionTouch[key][3].style.display = 'block'; 
                        } else {
                          ObjectFunctionTouch[key][2].style.display = 'block';
                          ObjectFunctionTouch[key][3].style.display = 'none'; 
                        }
                      }else{
                        console.log('----')
                      }
                  }
                 }
                }
              }
            }
          
            animate();
            
    }
    function moveObjectToM(destinationX, destinationY, object, sp) {
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
                // відстеження торкання
                let test=document.title;
                
                if(test in ObjectFunctionTouch){
                  if (!excludedClassesMoveF.includes(test)){
                    if (test in ObjectFunctionTouch){
                      let key = test;
                      if (moveSpace(ObjectFunctionTouch[key][0],ObjectFunctionTouch[key][1])) {
                        ObjectFunctionTouch[key][2].style.display = 'none';
                        ObjectFunctionTouch[key][3].style.display = 'block'; 
                      } else {
                        ObjectFunctionTouch[key][2].style.display = 'block';
                        ObjectFunctionTouch[key][3].style.display = 'none'; 
                      }
                    }else{
                      console.log('----')
                    }
                }
               }
                
              }
            }
          
            animate();
            
    }
});





// функіця 2

let btn1 = document.querySelector('.addElement_0');
let btn2 = document.querySelector('.addElement_1');
let btn3 = document.querySelector('.addElement_2');
let btn4 = document.querySelector('.addElement_3');
let btn5 = document.querySelector('.createFunctionTouch');
let textInputOne;
btn1.addEventListener('click',function(){
  textInputOne= document.querySelector('.elemet_0')
  textInputOne.value = clickAny.className
})

let textInputTwo;
btn2.addEventListener('click',function(){
  textInputTwo = document.querySelector('.elemet_1')
  textInputTwo.value = clickAny.className
})

let textInputThree;
btn3.addEventListener('click',function(){
  textInputThree = document.querySelector('.elemet_2')
  textInputThree.value = clickAny.className
})

let textInputFour;
btn4.addEventListener('click',function(){
  textInputFour = document.querySelector('.elemet_3')
  textInputFour.value = clickAny.className
})

ObjectFunctionTouch={

}
btn5.addEventListener('click',function(){
  let ElOne = document.querySelector(`.${textInputOne.value}`);
  let ElTwo = document.querySelector(`.${textInputTwo.value}`);
  let ElThree = document.querySelector(`.${textInputThree.value}`);
  let ElFour = document.querySelector(`.${textInputFour.value}`);
  ObjectFunctionTouch[ElOne.className]=[ElOne,ElTwo,ElThree,ElFour];
  textInputOne.value='';
  textInputTwo.value='';
  textInputThree.value='';
  textInputFour.value='';
})

let x_f4;
let x_f3;
let x_f1;
let x_f2;

function moveSpace(f1, f2) {
    x_f1 = f1;
    x_f2 = f2;
    x1 = x_f1 ? x_f1.getBoundingClientRect() : null;
    x2 = x_f2 ? x_f2.getBoundingClientRect() : null;
    return x1 && x2 && !(x1.right < x2.left || x1.left > x2.right || x1.bottom < x2.top || x1.top > x2.bottom);
}

document.addEventListener('mouseup', startTouch);


function startTouch(event){
  if (!excludedClassesMoveF.includes(event.target.className)){
    if (event.target.className in ObjectFunctionTouch){
      let key = event.target.className
      if (moveSpace(ObjectFunctionTouch[key][0],ObjectFunctionTouch[key][1])) {
        ObjectFunctionTouch[key][2].style.display = 'none';
        ObjectFunctionTouch[key][3].style.display = 'block'; 
      } else {
        ObjectFunctionTouch[key][2].style.display = 'block';
        ObjectFunctionTouch[key][3].style.display = 'none'; 
      }
    }else{
      console.log('----')
    }
  }
}