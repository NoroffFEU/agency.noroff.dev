import { getSingleListing } from '../../api/posts/getSingleListing.js';
import { createElement } from '../CreateHtml.js';
import { parseDate } from '../../utilities/parse/parse.js';
import { findDaysAgo } from '../../utilities/dateConverter/dateConverter.js';

export const renderListing = async () => {
  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  const metaDescription = document.head.children[4];
  const container = document.getElementById('listingContainer');
  const editDeleteListingContainer = document.querySelector('.editDeleteListingButton');

  if (id) {
    const result = await getSingleListing(id);
    const { title, company } = result;
    metaDescription.content = `View ${title} Application at Noroff Job Agency`;

    // Fetch the logged-in user's companyId from localStorage
    const currentUserCompanyId = localStorage.getItem('companyId')
      ? localStorage.getItem('companyId').replace(/"/g, '').trim()
      : null;
    const userRole = localStorage.getItem('role')
      ? localStorage.getItem('role').replace(/"/g, '').trim()
      : null;

    const listing = createListing(result, userRole);
    container.append(listing);

    // Only display edit and delete if the user is the owner (companyId matches)
    editDeleteListingContainer.classList.toggle('d-none', currentUserCompanyId !== company.id);
  } else {
    alert('No id provided');
    setTimeout(() => {
      location.href = '../index.html';
    }, 2000);
  }
};

const createListing = (result, userRole) => {
  const { company, title, description, deadline, created, requirements, tags, applications } =
    result;
  const element = createElement('div');
  const card = createElement('div', ['card', 'bg-theme-light', 'd-flex', 'border-0', 'rounded-0']);
  const img = createImg(company);
  const cardBody = createCardBody(
    title,
    description,
    deadline,
    company,
    created,
    requirements,
    tags,
    userRole,
    applications
  );
  card.append(img, cardBody);
  element.append(card);
  return element;
};

const createImg = ({ name, logo }) => {
  const element = createElement(
    'img',
    ['listing-logo', 'my-5', 'card-img-top', 'rounded', 'w-75'],
    null,
    null,
    null,
    logo,
    name
  );
  return element;
};

const createCardBody = (
  title,
  description,
  deadline,
  company,
  created,
  requirements,
  tags,
  userRole,
  applications
) => {
  const element = createElement('div', ['card-body', 'd-flex', 'flex-column', 'gap-2']);
  const h1 = createElement('h1', ['card-title'], null, title);
  const detailsContainer = createDetailsContainer(title, company, deadline, created, applications);
  const btnContainer = createBtnContainer(userRole);
  const tagsContainer = createTagContainer(tags);
  const jobDescription = createElement('p', null, null, description);
  const requirementsContainer = createRequirementsContainer(requirements);
  element.append(
    h1,
    detailsContainer,
    btnContainer,
    tagsContainer,
    jobDescription,
    requirementsContainer
  );
  return element;
};

export const createDetailsContainer = (title, company, deadline, created, applications) => {
  const element = createElement('div');
  const { sector, name } = company;
  const jobDetails = createElement('p', null, null, `${title}  /  ${sector}  /  ${name}`);
  const deadlineDetails = createElement(
    'p',
    null,
    null,
    `Created: ${findDaysAgo(created)} days ago / Deadline: ${parseDate(deadline)}`
  );
  if (applications) {
    const totalApplications = createElement(
      'p',
      null,
      null,
      `Total applications: ${applications.length}`
    );
    element.append(jobDetails, deadlineDetails, totalApplications);
  } else {
    element.append(jobDetails, deadlineDetails);
  }
  return element;
};

const createBtnContainer = (userRole) => {
  const element = createElement('div', [
    'd-flex',
    'align-items-center',
    'gap-2',
    'my-3',
    'buttonContainer',
  ]);
  // Create the button container for additional buttons (e.g., "Apply for job") shown for roles other than Client.
  // Edit and Delete are handled separately via editDeleteListingContainer.
  if (userRole === 'Client') {
    return element;
  }
  const applyBtn = createElement(
    'a',
    ['btn', 'btn-theme-secondary', 'text-uppercase', 'w-100', 'rounded-0', 'applyBtn'],
    null,
    'Apply for job'
  );
  applyBtn.dataset.auth = 'applyForJob';
  element.append(applyBtn);

  const favIcon = createElement(
    'img',
    null,
    null,
    null,
    null,
    '/assets/icons/heart-fav.svg',
    'heart icon'
  );
  favIcon.style = 'width: 30px';
  const favBtn = createElement('button', ['btn', 'btn-theme-light'], [favIcon]);
  favBtn.dataset.auth = 'favoriteListing';
  element.append(favBtn);

  return element;
};

const createTagContainer = (tags) => {
  const element = createElement('div', ['d-flex', 'flex-wrap', 'gap-2']);
  tags.forEach((tag) => {
    const span = createElement('span', ['badge', 'bg-dark'], null, tag);
    element.append(span);
  });
  return element;
};

const createRequirementsContainer = (requirements) => {
  const element = createElement('div');
  const h2 = createElement('h2', ['fs-5', 'fw-semibold'], null, 'Requirements:');
  const ul = createElement('ul');
  requirements.forEach((requirement) => {
    const li = createElement('li', null, null, requirement);
    ul.append(li);
  });
  element.append(h2, ul);
  return element;
};
