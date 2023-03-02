/**
 * Function for creating a new input
 * @param {string} name sets name property
 * @param {string} type sets type property
 * @param {string} title sets title property
 * @param {placeholder} placeholder sets placeholder property
 * @param {element} parent Element container to append to
 * @returns Anew input with selected properties to parent element.
 */
export function createInput(name, type, title, placeholder, parent) {
  const input = document.createElement('input');
  input.name = name;
  input.type = type;
  input.title = title;
  input.placeholder = placeholder;
  input.classList.add('form-control');

  parent.append(input);
  return parent;
}

/**
 * Function for creating a new select input
 * @param { array
 * } array An array with name key/value pair.
 * @param { element } parent container to append to
 * @returns returns a new select input with the key/value of the array param.
 */
export function createInputSelect(array, parent) {
  const container = document.createElement('div');
  container.classList.add('d-flex');

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-dark');
  button.innerHTML = '&#10005;';
  button.type = 'button';
  button.addEventListener('click', () => container.remove());

  const select = document.createElement('select');
  select.name = 'degree';

  container.append(select, button);

  const optionTitle = document.createElement('option');
  optionTitle.innerHTML = 'Choose a degree';
  select.append(optionTitle);
  select.classList.add('form-select');

  array.forEach((element) => {
    const option = document.createElement('option');

    const { name } = array;
    option.innerHTML = element.name;
    option.value = element.name;

    select.append(option);
  });

  parent.append(container);
  return container;
}
