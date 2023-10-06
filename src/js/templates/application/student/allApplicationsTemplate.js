/**
 * Template for applications sent by student
 * @param {array} data - Application array from the API
 * @returns - The HTML for applications sent
 */
export function allApplicationsTemplate() {
  /// Placeholders
  const data = {
    applicationTitle: 'Listing title',
    media: '/images/icons/DefaultPlaceholder.svg',
    applicationText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ending: 'Ends 16/01',
    applicantsCount: 4,
  };

  const { applicationTitle, media, applicationText, applicantsCount, ending } = data;

  /// Elements
  const application = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const body = document.createElement('div');
  const title = document.createElement('h3');
  const text = document.createElement('p');
  const footer = document.createElement('div');
  const applicants = document.createElement('p');
  const endsAt = document.createElement('p');
  const viewBtn = document.createElement('button');

  /// Content
  img.src = media;
  title.textContent = applicationTitle;
  text.textContent = applicationText;
  applicants.textContent = `${applicantsCount} Applicants`;
  endsAt.textContent = ending;
  viewBtn.textContent = 'View';

  /// Classes
  application.classList.add('d-flex');
  imgContainer.classList.add('ratio', 'ratio-1x1', 'w-25');
  img.classList.add('object-fit-cover');
  body.classList.add('d-flex', 'flex-column', 'gap-1', 'p-3');
  title.classList.add('fs-5');
  footer.classList.add('d-flex', 'gap-2', 'align-items-baseline');
  viewBtn.classList.add('btn', 'btn-theme-primary', 'px-5', 'rounded-1');

  /// Append
  imgContainer.append(img);
  footer.append(applicants, endsAt, viewBtn);
  body.append(title, text, footer);
  application.append(imgContainer, body);

  return application;
}
