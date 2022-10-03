import { createElement } from "ardelon-create-element";
import "./assets/style/style.scss";

const rectangle = createElement({ classList: ["rectangle-container"] });
const resizeButton = createElement({
    classList: ["resize-button"],
    type: "button",
    innerText: "Tut ve Kaydır",
});

let x, y;
let moveX, moveY;
const getRectangleSize = (e) => {
    console.log("get rectangle size");
    x = e.clientX;
    y = e.clientY;

    window.addEventListener("mousemove", moveRectangle);
};

resizeButton.addEventListener("mousedown", getRectangleSize);

const moveRectangle = (d) => {
    console.log("move rectangle");
    moveX = d.movementX;
    moveY = d.movementY;

    const compStyle = window.getComputedStyle(rectangle)
    const height = parseFloat(compStyle.height)
    const width = parseFloat(compStyle.width)

    rectangle.style.height = `${height+d.movementY}px`
    rectangle.style.width = `${width+d.movementX}px`;
};


const newRectangle = (f) => {
    console.log("new rectangle");
    window.removeEventListener("mousemove", moveRectangle);
};
window.addEventListener("mouseup", newRectangle);

rectangle.append(resizeButton);
document.body.append(rectangle);