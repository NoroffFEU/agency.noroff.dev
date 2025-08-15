import { createInputSelect } from './../../templates/profile/index.js';
import { degreeOptions } from '../../data/arrays.js';

export function addDegreeInput() {
  const button = document.getElementById('degreesButton');
  const container = document.getElementById('degreesContainer');

  button.addEventListener('click', () => {
    const formSelect = document.querySelectorAll('.form-select');

    if (formSelect.length < 5) {
      createInputSelect(degreeOptions, container)
    }
  });


}