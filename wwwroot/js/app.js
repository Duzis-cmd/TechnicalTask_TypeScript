// Settings
var args = '5px 10px 15px 20px';
var w = '650';
var row = /** @class */ (function () {
    function row() {
        var _this = this;
        this.img = [];
        this.col = []; // child nodes
        this.add = function (obj) {
            if (obj instanceof col) {
                _this.col.push(obj);
            }
            else {
                _this.img.push(obj);
            }
        };
    }
    return row;
}());
var col = /** @class */ (function () {
    function col() {
        this.img = [];
        this.row = []; // child nodes
    }
    col.prototype.add = function (obj) {
        if (obj instanceof row) {
            this.row.push(obj);
        }
        else {
            this.img.push(obj);
        }
    };
    return col;
}());
var r = new row(), c = new col(), r1 = new row(), r2 = new row(), r3 = new row(), r4 = new row(), r5 = new row(), c1 = new col(), c2 = new col(), c3 = new col(), c4 = new col();
var treeArray = [];
r.add(img(0));
r.add(img(1));
r.add(img(2));
r.add(img(3));
r.add(img(4));
//c.add(img(2)); c.add(img(3));
//c1.add(r1); c1.add(r2); c1.add(img(4));
//r1.add(img(5)); r1.add(c2); r1.add(img(6));
//r2.add(img(7)); r2.add(img(8)); r2.add(img(9));
//c2.add(img(10)); c2.add(r3); c2.add(r4);
//r3.add(img(11)); r3.add(img(12));
//r4.add(c3); r4.add(c4);
//c3.add(img(13)); c3.add(img(14));
//c4.add(img(15)); c4.add(r5);
//r5.add(img(16));
function DrawStoryBoard(frame, args) {
    var treeSize = 6;
    // Make div element with row class
    var tempRow = document.createElement('div');
    tempRow.setAttribute('class', 'row');
    var canvas = document.getElementById('canvas').appendChild(tempRow);
    // Setting width to row element
    canvas.setAttribute('width', w);
    //while (treeSize > 0) {
    //}
    for (var _i = 0, _a = frame.img; _i < _a.length; _i++) {
        var _imgR = _a[_i];
        // Make img element and set src from array element
        var tempImg = document.createElement('img');
        tempImg.src = _imgR.src;
        // Make div element with col class
        var tempCol = document.createElement('div');
        tempCol.setAttribute('class', 'col');
        // Adding image to html
        tempRow.appendChild(tempImg);
        // Adding custom padding
        tempImg.style.padding = args;
    }
    for (var _b = 0, _c = frame.col; _b < _c.length; _b++) {
        var _colR = _c[_b];
        var tempCol = document.createElement('div');
        tempCol.setAttribute('class', 'col');
        tempRow.appendChild(tempCol);
    }
    //console.log(r.img.length);
    //console.log(temp);     
}
function img(i) {
    var container = document.getElementById('container');
    var img = container.getElementsByTagName('img');
    return img[i];
}
//function resizeCanvas() {
//    const canvas = document.getElementById('canvas')! as HTMLDivElement;
//    window.addEventListener('resize', resizeCanvas, false);
//    function resizeCanvas() {
//        //canvas.width = window.innerWidth;
//        //canvas.height = window.innerHeight;
//        DrawStoryBoard(r, args);
//    }
//    resizeCanvas();    
//}
function hideImg() {
    var container = document.getElementById('container');
    var innerDiv = container.getElementsByTagName('*');
    for (var i = 0; i < innerDiv.length; i++) {
        innerDiv[i].setAttribute('style', "display: none");
    }
}
function TSButton() {
    //resizeCanvas();
    DrawStoryBoard(r, args);
    hideImg();
}
//# sourceMappingURL=app.js.map