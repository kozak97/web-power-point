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
    document.addEventListener('dblclick', function (event) {
        let clickedElement = event.target.className;
        document.title = `${clickedElement}`;
        let element = document.querySelector(`.${clickedElement}`);

        if (activeDraggable) {
            activeDraggable.destroy();
        }

        activeDraggable = new DraggableElement(element);

        // зміна тексту
        let text_chenge = element.firstElementChild;
        let textForArea= document.querySelector('.textarea_name');
        textForArea.value=text_chenge.innerHTML;
        
        // зміна тексту


        // Зупиняємо подальше розповсюдження події, щоб не викликати обробник для батьківського елемента
        event.stopPropagation();
    });
});




