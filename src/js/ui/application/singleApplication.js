import { singleApplicationTemplate } from '../../templates/application/student/singleApplicationTemplate';

export function displaySingleApplication(data) {
  document.title = data.title;
  const container = document.getElementById('singleApplicationContainer');
  container.append(singleApplicationTemplate(data));
}
