function logoCreate(text, textColor, shape, shapeColor) {    
    // Setting dimensions for the SVG Logo
    const width = 300;
    const height = 200;

    // Define SVG content including width anf height
    let logo = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

    // Draw the shape based on user input
    if (shape.toLowerCase() === 'circle') {
        //Circle with center at (150, 100) and radius 50
        logo += `<circle cx="150" cy="100" r="50" fill="${shapeColor}"/>`;
    } else if (shape.toLowerCase() === 'square') {
        //S quare with top-left corner at (100, 50) and side length 100
        logo += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}"/>`;
    } else if (shape.toLowerCase() === 'triangle') {
        //Triangle with vertices at (100, 150), (200, 50), and (300, 150)
        logo += `<polygon points="100,150 200,50 300,150" fill="${shapeColor}"/>`;
    }

    // Add text to the SVG
    logo += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;

    // Close SVG tag
    logo += `</svg>`;

    return logo;
}

//Export
module.exports = { logoCreate };