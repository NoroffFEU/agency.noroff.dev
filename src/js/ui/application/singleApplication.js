import { singleApplicationTemplate } from '../../templates/application/student/singleApplicationTemplate';

/**
 * Displays single application
 * @param {object} data - The single application data fetched from the API
 */
export function displaySingleApplication(data) {
  const container = document.getElementById(''); /// Add container for single application view
  container.append(singleApplicationTemplate(data));
}
