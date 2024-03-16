//your code here

document.addEventListener("DOMContentLoaded", () => {

// Global variable to store the dragged element
let draggedElement;

// Function to handle the drag start event
function dragStart(event) {
    draggedElement = event.target;
}

// Function to handle the drag over event
function dragOver(event) {
    event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
    event.preventDefault();
    // Swap background images of the dragged element and the drop target
    if (event.target !== draggedElement && event.target.classList.contains('image')) {
        const tempBackground = window.getComputedStyle(event.target).backgroundImage;
        event.target.style.backgroundImage = window.getComputedStyle(draggedElement).backgroundImage;
        draggedElement.style.backgroundImage = tempBackground;
    }
}

// Add event listeners to draggable elements and assign IDs dynamically
const draggableElements = document.querySelectorAll('.image');
draggableElements.forEach((element, index) => {
    // Add an ID to each element dynamically (div1, div2, ...)
    element.id = 'div' + (index + 1);
    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragover', dragOver);
    element.addEventListener('drop', drop);
})

});