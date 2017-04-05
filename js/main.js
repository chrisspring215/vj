var output = document.getElementById('output')

var clips = ['eyes.gif', 'earth.gif', 'gif3.gif'];

var blendModes = ['normal','multiply','screen','overlay','darken','lighten','color-dodge','color-burn','hard-light','soft-light','difference','exclusion','hue','saturation','color','luminosity'];

var blendModesPanel = document.getElementById('blend-modes');
var video1Options = document.getElementById('video1');
var video2Options = document.getElementById('video2');


function buildBlendModes(a) {
    numOfModes = a.length;
    b = ''
    for (var index = 0; index <= numOfModes - 1; index++) {
        b = b + '<button value="' + a[index] + '">' + a[index] + '</button>'; 
    }
    return b
}
blendModesPanel.innerHTML = buildBlendModes(blendModes);




function buildVideo1Options(a) {
    numOfvids = a.length;
    b = ''
    for (var index = 0; index <= numOfvids - 1; index++) {
        b = b + '<option value="' + a[index] + '">' + a[index] + '</option>'; 
    }
    return b
}
video1Options.innerHTML = buildVideo1Options(clips);

function buildVideo2Options(a) {
    numOfvids = a.length;
    b = ''
    for (var index = 0; index <= numOfvids - 1; index++) {
        b = b + '<option value="' + a[index] + '">' + a[index] + '</option>'; 
    }
    return b
}
video2Options.innerHTML = buildVideo2Options(clips);

function selectVideo1() {
    output.setAttribute('style', 'background: url(img/' + (document.getElementById('video1').value)  + ');');
}

