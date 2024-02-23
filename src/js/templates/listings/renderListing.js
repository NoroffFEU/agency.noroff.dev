import { getSingleListing } from '../../api/posts/getSingleListing.js';
import { createElement } from '../CreateHtml.js';
import { parseDate } from '../../utilities/parse/parse.js';
import { findDaysAgo } from '../../utilities/dateConverter/dateConverter.js';

export const renderListing = async () => {
  const url = new URL(location.href);
  const id = url.searchParams.get('id');

  const metaDescription = document.head.children[4];

  const container = document.getElementById('listingContainer');

  if (id) {
    const result = await getSingleListing(id);
    const { title, company } = result;
    console.log(result);

    metaDescription.content = `View ${title} Application at Noroff Job Agency`;

    //Have used userName and UserRole because i could not get the Store to work

    /* This could should call user name and role as profile from the class Store that handles local storage*/
    const loggedCompanyId = localStorage.getItem('companyId')
      ? localStorage.getItem('companyId').replace(/"/g, '').trim()
      : null;
    const userRole = localStorage.getItem('role')
      ? localStorage.getItem('role').replace(/"/g, '').trim()
      : null;
    const listing = createListing(result, userRole);
    const btnContainer = listing.querySelector('.buttonContainer');
    container.append(listing);

    // Mariusz Rozycki
    // correct condition in next line should be 'loggedCompanyId === company.id' - to get effect we have to be able to create listing/offer as 'Client'
    if (loggedCompanyId === company.id && userRole === 'Client') {
      btnContainer.innerHTML = '';
      const editBtn = createElement(
        'a',
        ['btn', 'btn-theme-secondary', 'text-uppercase', 'rounded-0', 'applyBtn'],
        null,
        'Edit listing'
      );
      /* Made by Mariusz Rozycki - set attributes to editBtn */
      editBtn.setAttribute('data-bs-toggle', 'modal');
      editBtn.setAttribute('data-bs-target', '#editListingModal');

      const deleteBtn = createElement('button', ['btn', 'btn-theme-dark'], null, 'Delete listing');
      /* made by Mariusz Rozycki - set attributes to deleteBtn */
      deleteBtn.setAttribute('data-bs-toggle', 'modal');
      deleteBtn.setAttribute('data-bs-target', '#deleteListingModal');

      btnContainer.append(editBtn, deleteBtn);
      btnContainer.classList.remove('d-none');
    }
    // Mariusz Rozycki - I think this condition is not necessary here
    // else if (userRole === 'Applicant') {
    //   btnContainer.classList.add('d-none');
    // }
  } else {
    alert('No id provided');
    setTimeout(() => {
      location.href = '../index.html';
    }, 2000);
  }
};

const createListing = (result, userRole) => {
  const { company, title, description, deadline, created, requirements, tags } = result;
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
    userRole
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
  userRole
) => {
  const element = createElement('div', ['card-body', 'd-flex', 'flex-column', 'gap-2']);
  const h1 = createElement('h1', ['card-title'], null, title);
  const detailsContainer = createDetailsContainer(title, company, deadline, created);
  const btnContainer = createBtnContainer(userRole);
  const tagsContainer = createTagContainer(tags);
  const JobDescription = createElement('p', null, null, description);
  const requirementsContainer = createRequirementsContainer(requirements);
  element.append(
    h1,
    detailsContainer,
    btnContainer,
    tagsContainer,
    JobDescription,
    requirementsContainer
  );
  return element;
};
const createDetailsContainer = (title, company, deadline, created) => {
  const element = createElement('div');
  const { sector, name } = company;
  const jobDetails = createElement('p', null, null, `${title}  /  ${sector}  /  ${name}`);
  const deadlineDetails = createElement(
    'p',
    null,
    null,
    `Created: ${findDaysAgo(created)} days ago / Deadline: ${parseDate(deadline)}`
  );
  element.append(jobDetails, deadlineDetails);
  return element;
};

const createBtnContainer = (userRole) => {
  console.log(userRole);
  const element = createElement('div', [
    'd-flex',
    'align-items-center',
    'gap-2',
    'my-3',
    'buttonContainer',
  ]);
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
