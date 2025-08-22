import { editStudent } from '../../api/users/editStudent.js';

/**
 * Handles the submission of the student profile form.
 * It collects the form data, filters out empty values, and submits the profile for editing.
 *
 * @param {Event} e - The event object from the form submission.
 * @returns {Promise<Object>} A Promise that resolves with the updated student profile.
 */
export function studentSubmitHandler(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const filteredFormData = new FormData();
  const degreeSelects = form.querySelectorAll('select[name="degree"]');
  const skillsString = formData.get('skills');
  for (const [key, value] of formData.entries()) {
    if (value !== '') {
      filteredFormData.append(key, value);
    }
  }
  const profile = Object.fromEntries(filteredFormData.entries());
  const skills = skillsString
    ? skillsString.split(",").map((select) => select.trim())
    : []
      .filter(Boolean);
  const degrees = Array.from(degreeSelects)
    .map((select) => select.value.trim())
    .filter(Boolean);
  profile.offers = degrees.join(',');
  profile.skills = skills;
  return editStudent(profile);
}
