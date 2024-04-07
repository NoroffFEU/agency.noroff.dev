const profileImage = document.querySelector('#profileImage');
const userName = document.querySelector('#profileName');
const applicantRole = document.querySelector('#profileRole');
const companyContact = document.querySelector('#profileContact');
const skillsList = document.querySelector('#skillsList');
const descriptionHeader = document.querySelector('#descriptionHeader');
const profileDescription = document.querySelector('#descriptionBody');
const editUserForm = document.querySelector('#editStudentProfile');
const listingsContainer = document.querySelector('#listingsContainer');

/**
 * @description Renders content on Applicant profile page
 * @param {object} data object data on user
 */
export function applicantProfile(data) {
  // console.log(data)
  const { firstName, lastName } = data;
  userName.innerText = firstName + ' ' + lastName;
  profileImage.src =
    data.avatar ||
    'https://miniforetak.no/wp-content/plugins/buddyboss-platform/bp-core/images/profile-avatar-buddyboss.png';
  profileImage.alt = (userName.innerText || 'Unknown') + 'avatar';
  applicantRole.innerText = data.title;
  companyContact.classList.add('d-none');
  const { skills } = data; // SkillsContainer
  if (Array.isArray(skills) && skills.length > 0) {
    skills.forEach((item) => {
      const renderSkill = document.createElement('li');
      renderSkill.classList.add('fw-bolder', 'fs-6', 'ms-0');
      renderSkill.innerText = item.trim();
      skillsList.append(renderSkill);
    });
  }
  descriptionHeader.innerText = 'About me'; 
  profileDescription.textContent = data.about;
  editUserForm.classList.remove('d-none');

  // Favorite listings section
    // The profile view will have a container component that will display the favorite listings of the Applicant. 
// That code goes here

  // Hiding listings section for applicants to adhere to figma design.
  listingsContainer.classList.add('d-none');
}
/* Here's a humorous and creative dummy submission for a job listing in the IT sector:

---

**Job Title/Position:** 
- Galactic Front-End Wizard / Back-End Oracle

**Tags:**
- HTML (Hyper Text Markup Lingo)
- CSS (Cascading Super Styles)
- JavaScript (Java's Script Kiddie)
- Python (Not the snake)
- SQL (Squirrels Query Language)
- Time travel debugging
- Coffee brewing mastery

**Requirements:**
- Must have at least 300 years of experience (time travelers welcome)
- Proficiency in resurrecting legacy code without summoning demons
- Ability to communicate with computers using only your mind
- Fluent in at least five languages, programming or otherwise (Pirate speak counts)
- Must be able to type with one hand while holding a coffee cup in the other
- Capable of fixing a server with a single stern look

**Application Date:**
- Before the last solar eclipse or after the next blue moon (whichever comes first)

**Job Description:**
Are you so good at coding that you’ve already finished projects due tomorrow, yesterday? Can you debug code faster than a speeding bullet? Can you speak fluent JavaScript and Python while asleep? If so, we want you!

Join our team of elite tech sorcerers where you’ll be crafting web experiences so immersive, users will need a map to find their way back to reality. As a Galactic Front-End Wizard, you’ll weave the fabric of the digital cosmos using only the finest threads of HTML, CSS, and JavaScript. And as a Back-End Oracle, you’ll divine the secrets of databases and server-side logic, guiding the uninitiated through the maze of backend mysteries with your SQL spells.

We offer competitive salaries, unlimited coffee, and a magic wand as part of your welcome kit. Apply now if you’re ready to code in dimensions yet to be discovered!

--- 

This playful job listing aims to bring a smile to potential applicants while highlighting key skills and job requirements in a unique way.
*/