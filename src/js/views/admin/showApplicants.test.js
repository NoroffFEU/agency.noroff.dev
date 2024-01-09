import { applicantTemplate } from './showApplicants.js';

const TEST_APPLICATION = [
  {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    address: { address: 'string', city: 'string', state: 'string', postalCode: 'string' },
    phone: 'string',
    image: 'string',
    company: { address: { postalCode: 'string' }, title: 'string', name: 'string' },
    name: 'string',
  },
];

describe('Applicants are showing in application table', () => {
  it('Succeeds in displaying an application in the application table (Name, job title, company, id and delete btn)', async () => {
    const applications = await applicantTemplate(TEST_APPLICATION);
    expect(applications).toMatch(/(<tr>)/i);
    expect(applications).toMatch(/(<th scope="row" class="applicant-modal")/i);
    expect(applications).toMatch(/(<td class="job-title">)/i);
    expect(applications).toMatch(/(<td class="company-name">)/i);
    expect(applications).toMatch(/(<td class="applicant-id">)/i);
    expect(applications).toMatch(/(<button class="btn btn-sm applicant-delete-btn"><img src=")/i);
  });
  it('Fails to get applications from the API', async () => {
    const applications = await applicantTemplate();
    await expect(applications).toBeUndefined();
  });
});

describe('Bootstrap modal that appears when clicking on an applicant', () => {
  it('HTML code for bootstrap modal to appear when clicking the applicant name', async () => {
    const applications = await applicantTemplate(TEST_APPLICATION);
    expect(applications).toMatch(/(data-bs-toggle="modal" data-bs-target="#applicantModal)/i);
    expect(applications).toMatch(/(<div class="modal fade applicant" id="applicantModal)/i);
    expect(applications).toMatch(/(tabindex="-1" aria-labelledby="applicantModalLabel)/i);
    expect(applications).toMatch(/(aria-hidden="true")/i);
    expect(applications).toMatch(/(<div class="modal-dialog modal-dialog-centered">)/i);
    expect(applications).toMatch(/(<div class="modal-content)/i);
    expect(applications).toMatch(/(<div class="modal-header)/i);
    expect(applications).toMatch(/(<div class="modal-body)/i);
    expect(applications).toMatch(/(<div class="modal-footer)/i);
  });
});

describe('Application modal close when clicking the "X" in top right corner or outside of the modal', () => {
  it('HTML code for closing bootstrap modal', async () => {
    const applications = await applicantTemplate(TEST_APPLICATION);
    expect(applications).toMatch(/(data-bs-target="#applicantModal)/i);
    expect(applications).toMatch(/(<button type="button" class="btn-close btn-close-white rounded-0" data-bs-dismiss="modal" aria-label="Close">)/i);
  });
});
