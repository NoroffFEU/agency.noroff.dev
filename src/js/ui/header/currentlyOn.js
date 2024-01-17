export function boldNavElement(){
    if(document.querySelector('[aria-current]') !== null){
        let currentlyOn= document.querySelector('[aria-current]');
        currentlyOn.classList.add('fw-bold')
    }
}