import { createInputSelect } from './../../templates/profile/index.js';
import { degreeOptions } from '../../data/arrays.js';

export function addDegreeInput() {
  const button = document.getElementById('degreesButton');
  const container = document.getElementById('degreesContainer');



  button.addEventListener('click', () => createInputSelect(degreeOptions, container));
}
