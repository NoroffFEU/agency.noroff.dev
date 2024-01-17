import { handleActiveLinks } from "../../listeners/footer/handleActiveLinks";

export const footer = () => {
  const footerElement = document.querySelector('footer');
  footerElement.classList.add('bg-theme-dark', 'pt-5', 'p-2', 'mt-auto', 'pb-5');

  const container = document.createElement('div');
  container.className = 'container-fluid justify-content-center';
  footerElement.append(container);

  const containerRow = document.createElement('div');
  containerRow.className = 'row center-desktop';
  container.append(containerRow);

  const leftSpacer = document.createElement('div');
  leftSpacer.className = 'col-xl-1 col-xxl-2 d-none d-lg-block';
  containerRow.append(leftSpacer);

  const mainContentCol = document.createElement('div');
  mainContentCol.className = 'col-12 col-xl-10 col-xxl-8';
  containerRow.append(mainContentCol);

  const innerRow = document.createElement('div');
  innerRow.className = 'row row-cols-1 row-cols-sm-2 row-cols-md-4';
  mainContentCol.append(innerRow);

  const createTextElement = (parent, tag, className, text) => {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    parent.append(element);
  };

  const createColumn = (parent) => {
    const col = document.createElement('div');
    col.className = 'col mb-5 mb-md-0';

    const innerCol = document.createElement('div');
    innerCol.className = 'col-12 col-md-10 col-lg-9';
    col.append(innerCol);

    parent.append(col);
    return innerCol;
  };

  const aboutNoroffCol = createColumn(innerRow);
  createTextElement(aboutNoroffCol, 'h4', 'text-white mb-3 fw-bold', 'About Noroff Job Agency');
  createTextElement(
    aboutNoroffCol,
    'p',
    'text-white',
    'Noroff Jobs is a student-built and student-run employment agency designed to link Industry Partners with skilled candidates.'
  );
  createTextElement(
    aboutNoroffCol,
    'p',
    'text-white',
    'Noroff Jobs is a non-profit organisation dedicated to placing students into their ideal workplace.'
  );

  const forCompaniesCol = createColumn(innerRow);
  createTextElement(forCompaniesCol, 'h4', 'text-white mb-3 fw-bold', 'For Companies');

  const forCompaniesList = document.createElement('ul');
  forCompaniesList.className = 'p-0 d-flex flex-column gap-1';
  forCompaniesCol.append(forCompaniesList);

  const createListItem = (parent, href, text) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    const a = document.createElement('a');
    a.href = href;
    a.className = 'nav-link text-white footer-nav-link';
    a.target = '_blanc';
    a.id = 'navlink-footer-id';
    a.textContent = text;
    li.append(a);

    parent.append(li);
  };

  createListItem(forCompaniesList, '#', 'About Noroff Jobs');
  createListItem(forCompaniesList, '#', 'Company User Guide');
  createListItem(forCompaniesList, '#', 'FAQ');

  const contactUsCol = createColumn(innerRow);
  createTextElement(contactUsCol, 'h4', 'text-white mb-3 fw-bold', 'Contact us');
  createTextElement(contactUsCol, 'p', 'text-white', 'Noroff Education AS');
  createTextElement(contactUsCol, 'p', 'text-white', 'Tordenskjoldsgate 9');
  createTextElement(contactUsCol, 'p', 'text-white', '4612 Kristiansand S');

  const contactInfoDiv = document.createElement('div');
  contactInfoDiv.className = 'd-flex flex-column gap-1';
  contactUsCol.append(contactInfoDiv);

  const phoneLink = document.createElement('a');
  phoneLink.href = 'tel:38000000';
  phoneLink.className = 'nav-link text-white';
  phoneLink.id = 'navlink-footer-id';
  const phoneIcon = document.createElement('img');
  phoneIcon.src = '/assets/icons/phone.svg';
  phoneIcon.className = 'footerIcon';
  phoneLink.append(phoneIcon);
  phoneLink.append(' 38000000');
  contactInfoDiv.append(phoneLink);

  const emailLink = document.createElement('a');
  emailLink.href = 'mailto:utdanning@noroff.no';
  emailLink.className = 'nav-link text-white';
  emailLink.id = 'navlink-footer-id';
  const emailIcon = document.createElement('img');
  emailIcon.src = '/assets/icons/mail.svg';
  emailIcon.className = 'footerIcon';
  emailLink.append(emailIcon);
  emailLink.append(' utdanning@noroff.no');
  contactInfoDiv.append(emailLink);

  const helpCol = createColumn(innerRow);
  createTextElement(helpCol, 'h4', 'text-white mb-3 fw-bold', 'Resources');

  const helpList = document.createElement('ul');
  helpList.className = 'p-0 d-flex flex-column gap-1';
  helpCol.append(helpList);

  createListItem(helpList, '../../../../pages/footer/privacypolicy.html', 'Privacy Policy');
  createListItem(helpList, '/terms_of_use.html', 'Terms of use');

  const rightSpacer = document.createElement('div');
  rightSpacer.classList.add('col-xl-1', 'col-xxl-2', 'd-none', 'd-lg-block');
  containerRow.append(rightSpacer);

  handleActiveLinks();
};
