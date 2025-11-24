const canvas = document.getElementById("super_canvas");
const ctx = canvas.getContext("2d");

const x1_slider = document.getElementById("x1_slider");
const y1_slider = document.getElementById("y1_slider");
const x1_text = document.getElementById("x1_text");
const y1_text = document.getElementById("y1_text");

const GLineLengthText = document.getElementById("GLineLength");

// キャンバスの中央を移動
ctx.translate(0, canvas.height-50);

// 四角形の中心を原点に
const rectWidth = 50;
const rectHeight = 50;

ctx.fillStyle = "blue";
ctx.fillRect(0,0, rectWidth+parseFloat(x1_slider.value)*50, rectHeight);
ctx.fillStyle = "red";
ctx.fillRect(0,-parseFloat(y1_slider.value)*50, rectWidth, rectHeight+parseFloat(y1_slider.value)*50);

// スライダーの値に基づいて四角形を移動
x1_slider.addEventListener("input", () => {
    x1_text.value = `${x1_slider.value}`;

    ctx.clearRect(0, -canvas.height+50, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0,0, rectWidth+parseFloat(x1_text.value)*50, rectHeight);
    ctx.fillStyle = "red";
    ctx.fillRect(0,-parseFloat(y1_text.value)*50, rectWidth, rectHeight+parseFloat(y1_text.value)*50);

    ctx.beginPath();
    ctx.moveTo(50,-parseFloat(y1_text.value)*50);
    ctx.lineTo(rectWidth+parseFloat(x1_text.value)*50, 0);
    ctx.strokeStyle = "lime";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    GLineLengthText.textContent = pythagoras(parseFloat(x1_text.value), parseFloat(y1_text.value))
});

y1_slider.addEventListener("input", () => {
    y1_text.value = `${y1_slider.value}`;

    ctx.clearRect(0, -canvas.height+50, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0,0, rectWidth+parseFloat(x1_text.value)*50, rectHeight);
    ctx.fillStyle = "red";
    ctx.fillRect(0,-parseFloat(y1_text.value)*50, rectWidth, rectHeight+parseFloat(y1_text.value)*50);

    ctx.beginPath();
    ctx.moveTo(50,-parseFloat(y1_text.value)*50);
    ctx.lineTo(rectWidth+parseFloat(x1_text.value)*50, 0);
    ctx.strokeStyle = "lime";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    GLineLengthText.textContent = pythagoras(parseFloat(x1_text.value), parseFloat(y1_text.value))
});



x1_text.addEventListener("input", () => {
    x1_slider.value = parseFloat(x1_text.value);


    ctx.clearRect(0, -canvas.height+50, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0,0, rectWidth+parseFloat(x1_text.value)*50, rectHeight);
    ctx.fillStyle = "red";
    ctx.fillRect(0,-parseFloat(y1_text.value)*50, rectWidth, rectHeight+parseFloat(y1_text.value)*50);

    ctx.beginPath();
    ctx.moveTo(50,-parseFloat(y1_text.value)*50);
    ctx.lineTo(rectWidth+parseFloat(x1_text.value)*50, 0);
    ctx.strokeStyle = "lime";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    GLineLengthText.textContent = pythagoras(parseFloat(x1_text.value), parseFloat(y1_text.value))
});
y1_text.addEventListener("input", () => {
    y1_slider.value = parseFloat(y1_text.value);


    ctx.clearRect(0, -canvas.height+50, canvas.width, canvas.height);

    ctx.fillStyle = "blue";
    ctx.fillRect(0,0, rectWidth+parseFloat(x1_text.value)*50, rectHeight);
    ctx.fillStyle = "red";
    ctx.fillRect(0,-parseFloat(y1_text.value)*50, rectWidth, rectHeight+parseFloat(y1_text.value)*50);

    ctx.beginPath();
    ctx.moveTo(50,-parseFloat(y1_text.value)*50);
    ctx.lineTo(rectWidth+parseFloat(x1_text.value)*50, 0);
    ctx.strokeStyle = "lime";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    GLineLengthText.textContent = pythagoras(parseFloat(x1_text.value), parseFloat(y1_text.value))
});

function pythagoras(x,y){return Math.sqrt(x**2 + y**2);};