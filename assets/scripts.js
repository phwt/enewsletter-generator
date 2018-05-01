document.getElementById("title").value = getSavedValue("title");
document.getElementById("issue_num").value = getSavedValue("issue_num");
document.getElementById("l1").value = getSavedValue("l1");
document.getElementById("sel_v").value = getSavedValue("sel_v");

// Bootstrap popover initizliation
$('[data-toggle="popover"]').popover();
$('.d-inline-block').popover({
  trigger: 'focus'
})

var l1 = "";
var length = 60;
var flength;
var theight;
var lv;


var lineCount_k;

function saveAsPNG(image, filename) { // No IE <11 support. Chrome URL bug for large images may crash
    var anchorElement, event, blob;

    function image2Canvas(image) { // converts an image to canvas
        function createCanvas(width, height) { // creates a canvas of width height
            var can = document.createElement("canvas");
            can.width = width;
            can.height = height;
            return can;
        };
        var newImage = canvas(img.width, img.height); // create new image
        newImage.ctx = newImage.getContext("2d"); // get image context
        newImage.ctx.drawImage(image, 0, 0); // draw the image onto the canvas
        return newImage; // return the new image
    }
    if (image.toDataURL === undefined) { // does the image have the toDataURL function
        image = image2Canvas(image); // No then convert to canvas
    }
    // if msToBlob and msSaveBlob then use them to save. IE >= 10
    // As suggested by Kaiido 
    if (image.msToBlob !== undefined && navigator.msSaveBlob !== undefined) {
        blob = image.msToBlob();
        navigator.msSaveBlob(blob, filename + ".png");
        return;
    }
    anchorElement = document.createElement('a'); // Create a download link
    anchorElement.href = image.toDataURL(); // attach the image data URL
    // check for download attribute
    if (anchorElement.download !== undefined) {
        anchorElement.download = filename + ".png"; // set the download filename
        if (typeof MouseEvent === "function") { // does the browser support the object MouseEvent
            event = new MouseEvent( // yes create a new mouse click event
                "click", {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    ctrlKey: false,
                    altKey: false,
                    shiftKey: false,
                    metaKey: false,
                    button: 0,
                    buttons: 1,
                }
            );
            anchorElement.dispatchEvent(event); // simulate a click on the download link.
        } else
        if (anchorElement.fireEvent) { // if no MouseEvent object try fireEvent 
            anchorElement.fireEvent("onclick");
        }
    }
}


//wrapText function modified from https://codepen.io/peterhry/pen/AGIEa
function wrapText(context, text, x, y, maxWidth, lineHeight) {

    var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

    for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
            // Determine how much of the word will fit
            test = test.substring(0, test.length - 1);
            metrics = context.measureText(test);
        }
        if (words[i] != test) {
            words.splice(i + 1, 0, words[i].substr(test.length))
            words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);
        //line = "     " + line;

        if (metrics.width > maxWidth && i > 0) {
            context.fillText(line, x, y);
            line = words[i] + ' ';
            y += lineHeight;
            lineCount++;
            lineCount_k = lineCount + 1;
            lv = lineCount;
            console.log(lineCount_k);
        } else {
            line = test;
        }
    }

    context.fillText(line, x, y);
}

function clears() {
    localStorage.clear();
    document.getElementById("sfl").reset();
}

function clearc() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    location.reload();
}

//Store textbox value in localstorage
function saveValue(e) {
    var id = e.id; // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(v) {
    if (localStorage.getItem(v) === null) {
        return ""; // You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}

$("#btn-save").prop('disabled', true);
$("#f_input").prop('disabled', true);
$("#f_input").change(showp);

$("textarea").keyup(function() {
    prtxt();
    phTxt = false;
});
function prtxt() {
    var canvas = document.getElementById("canvas");
    var lk = document.getElementById("lineCount");
    var lv = document.getElementById("sel_v");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    l1 = document.getElementById("l1").value;
    l1 = "     " + l1;
    ctx.font = '25px ThaiSansNeue';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0a1c28';
    wrapText(ctx, l1, 50, 50, 700, 30);
    lk.innerHTML = lineCount_k;
    lv.value = lineCount_k;
}

function savei() {
    var cv = document.getElementById("sel_v").value
    if (cv == "") {
        alert("Please Enter line number.");
    } else {
        f_input.disabled = false;
        $('#imgSelectModal').modal('show');
    }

    var lv = document.getElementById("sel_v").value;

    for (i = 1; i < lv; i += 1) {
        length = length + 30;
        flength = length + 755;
    }
    theight = flength + 106;
}

var placeholder;
function showp(e) {
    $('#btn-save').prop('disabled', false);
    $('#btn-save').removeClass("disabled");
    $('#title, #issue_num, #l1, #sel_v, #options > button').prop('disabled', true);
    $('#imgSelectModal').modal('hide');
    
    var title_r = document.getElementById("title").value;
    var isn_r = document.getElementById("issue_num").value;

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.height = theight;

    var img = new Image;
    if(phImg){
        img = loadImage('assets/ironic.jpg', main);
    } else {
        img.src = URL.createObjectURL(e.target.files[0]);
    }

    var img1 = loadImage('assets/h01.png', main);
    var img2 = loadImage('assets/f01.png', main);

    var imagesLoaded = 0;

    function main() {
        imagesLoaded += 1;

        if (imagesLoaded == 2) {
            // composite now
            ctx.drawImage(img1, 0, 0);

            //ctx.globalAlpha = 0.5;
            ctx.drawImage(img2, 0, flength);

            ctx.font = 'bold 16px Myriad Pro';
            ctx.fillStyle = '#0a1c28';
            ctx.fillText(isn_r, 707, 175);

            ctx.font = '47px ThaiSansNeue';
            ctx.textAlign = 'center';
            ctx.fillText(title_r, 392, 228);

            ctx.drawImage(img, 93, 296);

            l1 = "     " + l1;
            ctx.font = '25px ThaiSansNeue';
            ctx.textAlign = 'left';
            ctx.fillStyle = '#0a1c28';
            wrapText(ctx, l1, 46, 768, 700, 30);

            ctx.beginPath();
            ctx.rect(16, 731, 750, length);
            ctx.globalAlpha = 0.03;
            ctx.fillStyle = "black";
            ctx.fill();
            //ctx.stroke();
            //theight = flength + 106;
        }
    }

    function loadImage(src, onload) {
        var img = new Image();

        img.onload = onload;
        img.src = src;

        return img;
    }


        if(phTxt && phImg){
            $('#res_h').append(" (Placeholder text and image used)");
        } else if(phTxt){
            $('#res_h').append(" (Placeholder text used)");
        } else if(phImg){
            $('#res_h').append(" (Placeholder image used)");
        }

}

var phTxt;
var phImg;
function placeholderImage(){
        phImg = true;
        showp();
}

function savefile() {
    var isn_r = document.getElementById("issue_num").value;
    var isn_rn = isn_r.replace("/", "-");
    var filename = "issue_" + isn_rn;
    saveAsPNG(canvas, filename);
}

function placeholderText(){
    phTxt = true;
    var theTragedy = "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.";
    $('#title').val("Tragedy of Darth Plagueis The Wise");
    $('#issue_num').val("EP.III ROTS");
    $('#l1').val(theTragedy);
    prtxt();
}