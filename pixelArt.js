// Create a 100x100 grid of divs
const pixelCanvas = document.getElementById('pixelCanvas');
for (let i = 0; i < 10000; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelCanvas.appendChild(pixel);
}

// Initialize color picker
const pickr = Pickr.create({
    el: '#colorPicker',
    theme: 'classic',
    default: 'black',
    swatches: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Set up drawing functionality
let currentColor = 'black';
pickr.on('change', (color) => {
    currentColor = color.toHEXA().toString();
});
pixelCanvas.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = currentColor;
    }
});

// Set up clear button
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    const pixels = document.getElementsByClassName('pixel');
    for (let pixel of pixels) {
        pixel.style.backgroundColor = 'white';
    }
});

// Set up undo/redo functionality
// This is a bit more complex and requires keeping track of the state history.
// For simplicity, this example does not include undo/redo functionality.
