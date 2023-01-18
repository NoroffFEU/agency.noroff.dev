import { clearSearchResults } from '/src/js/ui/search/components/clearSearchResults.js'

HTMLElement.prototype.clear = clearSearchResults;

/*
    function for displaying a warning message
*/

export function renderSearchMessage(message) {
    usersContainer.clear();
    const warningMessageContainer = document.createElement('p');
    warningMessageContainer.classList.add('text-center', 'mt-1', 'py-3', 'bg-warning');
    const warningMessage = message;
    warningMessageContainer.append(warningMessage)
    usersContainer.appendChild(warningMessageContainer);
}