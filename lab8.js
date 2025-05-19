document.addEventListener('DOMContentLoaded', function() {
    const room = document.getElementById('room');
    const furnitureItems = document.querySelectorAll('.furniture-item');

    let draggedItem = null;
    let offsetX, offsetY;

    // обробка панелі меблів
    furnitureItems.forEach(item => {
        item.addEventListener('dragstart', function(e) {
            this.classList.add('dragging');


            const dragImage = new Image();
            e.dataTransfer.setDragImage(dragImage, 0, 0);

            // створюємо копію для переміщення
            draggedItem = this.cloneNode(true);
            draggedItem.classList.remove('furniture-item');
            draggedItem.classList.add('placed-furniture');
            draggedItem.style.width = '60px';
            draggedItem.style.height = '60px';
            draggedItem.style.background = 'transparent';

            // кнопка видалення
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '✕';
            deleteBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.parentElement.remove();
            });

            draggedItem.appendChild(deleteBtn);

            // отримуємо атрибут дата для розмірів
            e.dataTransfer.setData('text/plain', this.getAttribute('data-type'));
        });

        item.addEventListener('dragend', function() {
            this.classList.remove('dragging');
            draggedItem = null;
        });
    });

    // обробка "кімнати"
    room.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    room.addEventListener('drop', function(e) {
        e.preventDefault();
        if (!draggedItem) return;

        // збільшення розміру
        const type = e.dataTransfer.getData('text/plain');
        let width, height;

        switch(type) {
            case 'chair':
                width = '250px';
                height = '250px';
                break;
            case 'table':
                width = '300px';
                height = '200px';
                break;
            case 'sofa':
                width = '400px';
                height = '200px';
                break;
            case 'bed':
                width = '400px';
                height = '400px';
                break;
            case 'wardrobe':
                width = '300px';
                height = '300px';
                break;
            case 'lamp':
                width = '200px';
                height = '200px';
                break;
            default:
                width = '80px';
                height = '80px';
        }

        draggedItem.style.width = width;
        draggedItem.style.height = height;
        draggedItem.style.background = 'transparent';

        // позиціонування
        const rect = room.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        draggedItem.style.left = `${x - parseInt(width) / 2}px`;
        draggedItem.style.top = `${y - parseInt(height) / 2}px`;

        // додаємо елемент
        room.appendChild(draggedItem);

        // можливість перетягувати
        makeDraggable(draggedItem);
    });

    // функція переміщення елементів
    function makeDraggable(element) {
        let isDragging = false;
        let startX, startY, startLeft, startTop;

        element.addEventListener('mousedown', function(e) {
            if (e.target.classList.contains('delete-btn')) return;

            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;

            const rect = element.getBoundingClientRect();
            startLeft = rect.left - room.getBoundingClientRect().left;
            startTop = rect.top - room.getBoundingClientRect().top;

            element.style.cursor = 'grabbing';
            e.preventDefault();
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            const newLeft = startLeft + dx;
            const newTop = startTop + dy;

            // перевірка рамок кімнати
            const roomRect = room.getBoundingClientRect();
            const elemRect = element.getBoundingClientRect();
            const elemWidth = elemRect.width;
            const elemHeight = elemRect.height;

            const maxLeft = roomRect.width - elemWidth;
            const maxTop = roomRect.height - elemHeight;

            element.style.left = `${Math.max(0, Math.min(newLeft, maxLeft))}px`;
            element.style.top = `${Math.max(0, Math.min(newTop, maxTop))}px`;
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
            element.style.cursor = 'move';
        });
    }
});


// для списку

const list = document.querySelector('footer .instructions ul');

list.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.add('hovered');
        console.log('mouseover: target =', event.target.textContent);
        console.log('relatedTarget =', event.relatedTarget?.textContent || 'null');
    }
});

list.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.remove('hovered');
    }
});