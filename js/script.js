let $ = document;
let keyCodeTitle = $.getElementById('key-code-title');
let keyCodeValue = $.getElementById('key-code-value');
let locationValue = $.getElementById('location-value');
let whichValue = $.getElementById('which-value');
let codeValue = $.getElementById('code-value');


document.body.addEventListener('keydown', function(event){
    console.log(event);
    keyCodeTitle.innerHTML = event.keyCode;
    keyCodeValue.innerHTML = event.keyCode;
    locationValue.innerHTML = event.location;
    whichValue.innerHTML = event.which;
    codeValue.innerHTML = event.code;
})