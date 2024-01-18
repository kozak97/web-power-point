// let element;


// document.addEventListener('DOMContentLoaded', function () {
//     document.addEventListener('dblclick', function (event) {
//         let clickedElement = event.target.className;
//         document.title = `${clickedElement}`;
//         element = document.querySelector(`.${clickedElement}`);


        

//         element.addEventListener('mousedown', function (event) {
//             isDragging = true;
//             offsetX = event.clientX - element.getBoundingClientRect().left;
//             offsetY = event.clientY - element.getBoundingClientRect().top;

//         });

//         document.addEventListener('mousemove', function (event) {
//             if (isDragging) {
//                 element.style.left = (event.clientX - offsetX) + 'px';
//                 element.style.top = (event.clientY - offsetY) + 'px';

//             }
//         });

//         document.addEventListener('mouseup', function () {
//             isDragging = false;
//         });
//     });
// });

// let isDragging = false;
// let offsetX, offsetY;

let excludedClassesMove = ['write','menu_all', 'heder_menu',
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
    'button_three_bottom','buttonArea','menu'];
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.userSelect = 'none';
});

class DraggableElement {
    constructor(element) {
        this.element = element;
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;

        // Зберігаємо початкове розташування батьківського елемента
        this.parentRect = this.element.parentElement.getBoundingClientRect();

        // Фіксуємо контекст для обробників подій
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

        this.setupDragListeners();
    }

    setupDragListeners() {
        this.element.addEventListener('mousedown', this.handleMouseDown);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseDown(event) {
        this.isDragging = true;
        this.offsetX = event.clientX - this.element.getBoundingClientRect().left;
        this.offsetY = event.clientY - this.element.getBoundingClientRect().top;
    }

    handleMouseMove(event) {
        if (this.isDragging) {
            const newLeft = event.clientX - this.offsetX - this.parentRect.left;
            const newTop = event.clientY - this.offsetY - this.parentRect.top;

            this.element.style.left = newLeft + 'px';
            this.element.style.top = newTop + 'px';
        }
    }

    handleMouseUp() {
        this.isDragging = false;
    }

    destroy() {
        this.element.removeEventListener('mousedown', this.handleMouseDown);
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);

        this.element = null;
    }
}

let activeDraggable = null;

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        let clickedElement = event.target.className;
        let element
        if (!excludedClassesMove.includes(clickedElement)) {
            document.title = `${clickedElement}`;
            ElemetnValue(clickedElement);
            // Заброна пересовувати меню
            element = document.querySelector(`.${clickedElement}`);
            if (activeDraggable) {
                activeDraggable.destroy();
            }
            activeDraggable = new DraggableElement(element);
            event.stopPropagation();
            // Заброна пересовувати меню

        } else {
            
        }
        // Заброна пересовувати меню
            // Раніше було так
        // Заброна пересовувати меню
        
    });
});


function ElemetnValue(Elemetn){
    if (Elemetn !== 'total_page'){
        let ChengeWidth = document.querySelector(`.${Elemetn}`).style.width
        let widthMenu = document.querySelector('.numberInput');
        let widthMenuS = document.querySelector('.slider');
        widthMenu.value=parseInt(ChengeWidth);
        widthMenuS.value=parseInt(ChengeWidth);

        let ChengeHeight = document.querySelector(`.${Elemetn}`).style.height;
        let heightMenu = document.querySelector('.numberInput_1');
        let heightMenuS = document.querySelector('.slider_1');
        heightMenu.value=parseInt(ChengeHeight);
        heightMenuS.value=parseInt(ChengeHeight);

        let ChengeRadius = document.querySelector(`.${Elemetn}`).style.borderRadius;
        let RadiusMenu = document.querySelector('.numberInput_2');
        let RadiusMenuS = document.querySelector('.slider_2');
        RadiusMenu.value=parseInt(ChengeRadius);
        RadiusMenuS.value=parseInt(ChengeRadius);

        let ChengeRotate = document.querySelector(`.${Elemetn}`).style.transform;
        let ChengeRotateNumber = ChengeRotate.replace("rotate(", "").replace("deg)", "");
        let RotateMenu = document.querySelector('.numberInput_3');
        let RotateMenuS = document.querySelector('.slider_3');
        RotateMenu.value=parseInt(ChengeRotateNumber);
        RotateMenuS.value=parseInt(ChengeRotateNumber);


        let ChengeBorderWidth = document.querySelector(`.${Elemetn}`).style.border;
        let ChengeBorderNumber = parseInt(ChengeBorderWidth)
        let borderMenu = document.querySelector('.numberInput_4');
        let borderMenuS = document.querySelector('.slider_4');
        borderMenu.value=parseInt(ChengeBorderNumber);
        borderMenuS.value=parseInt(ChengeBorderNumber);

        let ChengeLayer = document.querySelector(`.${Elemetn}`).style.zIndex;
        let ChengeLayerNumber = parseInt(ChengeLayer)
        let LayerMenu = document.querySelector('.numberInput_5');
        let LayerMenuS = document.querySelector('.slider_5');
        LayerMenu.value=parseInt(ChengeLayerNumber);
        LayerMenuS.value=parseInt(ChengeLayerNumber);

        let ChengeShadowX = document.querySelector(`.${Elemetn}`).style.boxShadow;
        console.log(ChengeShadowX)

        let ChengeBagColor = document.querySelector(`.${Elemetn}`).style.backgroundColor;
        let BagColor = document.querySelector('.colorPicker_1');
        BagColor.value=rgbToHex(ChengeBagColor);

        let ChengeBorderColor = document.querySelector(`.${Elemetn}`).style.borderColor;
        let borderMenuColor = document.querySelector('.colorPicker');
        borderMenuColor.value=rgbToHex(ChengeBorderColor);

        // Функція для конвертації RGB в HEX
        function rgbToHex(color) {
            // Отримати складові RGB з рядка стилів
            let rgbArray = color.match(/\d+/g);
            
            // Конвертувати в HEX та повернути
            return "#" + componentToHex(parseInt(rgbArray[0])) + componentToHex(parseInt(rgbArray[1])) + componentToHex(parseInt(rgbArray[2]));
        }

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        

        let text_chenge = document.querySelector(`.${Elemetn}`).firstElementChild;
        if(text_chenge!==null){
            let textForArea= document.querySelector('.textarea_name');        
            textForArea.value=text_chenge.innerHTML;
        }
     

    }
   
}

