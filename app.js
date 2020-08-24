 // SMS App
let TextAreaEl=document.querySelector('#text-area');
let CharCountEl=document.querySelector('#char-count');
TextAreaEl.addEventListener('keyup',function(){
    let textLength = TextAreaEl.value.length;
    CharCountEl.innerText = textLength;
});