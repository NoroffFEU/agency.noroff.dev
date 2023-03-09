import { allApplicationsTemplate } from '../../templates/application/student/allApplicationsTemplate.js';

/**
 * Displays applications
 * @param {array} data - Application array from API
 */
export function displayAllApplications(data) {
  const container = document.getElementById(''); /// Add container for all applications
  const applicationArray = [...data];
  applicationArray.forEach((application) => {
    container.append(allApplicationsTemplate(application));
  });
}
