import { singleApplicationTemplate } from '../../templates/application/student/singleApplicationTemplate';

/**
 * Displays single application
 * @param {object} data - The single application data fetched from the API
 */
export function displaySingleApplication(data) {
  document.title = data.title;
  const container = document.getElementById(''); /// Add container for single application view
  container.append(singleApplicationTemplate(data));
}
