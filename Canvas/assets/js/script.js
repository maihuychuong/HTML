var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Đặt màu vẽ là màu đỏ
ctx.fillStyle = 'red';

// Vẽ hình chữ nhật với tọa độ góc trên bên trái (50, 50), chiều dài 200px và chiều cao 100px
ctx.fillRect(50, 50, 200, 100);
