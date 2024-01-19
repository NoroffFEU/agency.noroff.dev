/**
 * function that gets the element that has the attribute aria-current and stores it as a variale called currentlyOn, it then adds the classList of fw-bold to
 * show the user which page they are currently on
 */
export function boldNavElement(){
    if(document.querySelector('[aria-current]') !== null){
        let currentlyOn= document.querySelector('[aria-current]');
        currentlyOn.classList.add('fw-bold')
    }
}