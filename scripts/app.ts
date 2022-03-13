// Settings
let args = '5px 10px 15px 20px';
let w = '650';

class row {
    img: Array<HTMLImageElement> = [];
    col: Array<col> = []; // child nodes
    

    add = (obj: HTMLImageElement | col) => {
        if (obj instanceof col) {
            this.col.push(obj);
        } else {
            this.img.push(obj);
        }
    }
}

class col {
    img: Array<HTMLImageElement> = [];
    row: Array<row> = []; // child nodes

    add(obj: HTMLImageElement | row) {
        if (obj instanceof row) {
            this.row.push(obj);
        } else {
            this.img.push(obj);
        }  


    }
}

let r = new row(),
    c = new col(),
    r1 = new row(),
    r2 = new row(),
    r3 = new row(),
    r4 = new row(),
    r5 = new row(),
    c1 = new col(),
    c2 = new col(),
    c3 = new col(),
    c4 = new col();

let treeArray: Array<row | col> = [];



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

function DrawStoryBoard(frame: row, args: string): void {

    let treeSize = 6;

    // Make div element with row class
    let tempRow = document.createElement('div');
    tempRow.setAttribute('class', 'row');
    let canvas = document.getElementById('canvas').appendChild(tempRow);
    // Setting width to row element
    canvas.setAttribute('width', w);  

    //while (treeSize > 0) {
    //}

    for (let _imgR of frame.img) {
        // Make img element and set src from array element
        let tempImg = document.createElement('img'); 
        tempImg.src = _imgR.src;
        // Make div element with col class
        let tempCol = document.createElement('div');        
        tempCol.setAttribute('class', 'col');

        // Adding image to html
        tempRow.appendChild(tempImg);
        // Adding custom padding
        tempImg.style.padding = args;         
    }

    for (let _colR of frame.col) {

        let tempCol = document.createElement('div');
        tempCol.setAttribute('class', 'col');
        tempRow.appendChild(tempCol);
    }

    //console.log(r.img.length);
    //console.log(temp);     
}

function img(i: number) {

    let container = document.getElementById('container');
    let img = container.getElementsByTagName('img');

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
    

function hideImg(): void {

    let container = document.getElementById('container');
    let innerDiv = container.getElementsByTagName('*');   

    for (let i = 0; i < innerDiv.length; i++) {

        innerDiv[i].setAttribute('style', "display: none");
    }
}

function TSButton() {
    //resizeCanvas();
    DrawStoryBoard(r, args);
    hideImg();
}

