import { createDetailsContainer } from './renderListing.js';

// Mock createElement to return simple objects instead of actual DOM elements
jest.mock('../CreateHtml.js', () => ({
  createElement: (tag, classes = [], children = null, textContent = '', attr1, attr2, attr3) => {
    return {
      tag,
      classes,
      children: children || [],
      textContent,
      attr1,
      attr2,
      attr3,
      append: jest.fn(),
    };
  },
}));

// Mock functions for date parsing
jest.mock('../../utilities/dateConverter/dateConverter.js', () => ({
  findDaysAgo: jest.fn(() => '3'),
}));

jest.mock('../../utilities/parse/parse.js', () => ({
  parseDate: jest.fn(() => '2025-01-01'),
}));

describe('createDetailsContainer', () => {
  it('should display total applications count if applications array', () => {
    const mockJobListing = {
      title: 'testTitle',
      company: { sector: 'testSector', name: 'testCompany' },
      deadline: '2025-01-01',
      created: '2025-03-06',
      applications: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };

    const detailsContainer = createDetailsContainer(
      mockJobListing.title,
      mockJobListing.company,
      mockJobListing.deadline,
      mockJobListing.created,
      mockJobListing.applications
    );

    // Check if the "Total applications" text is correctly included
    expect(detailsContainer.append).toHaveBeenCalled();
    expect(
      detailsContainer.append.mock.calls.some((call) =>
        call.some((el) => el.textContent.includes('Total applications: 3'))
      )
    ).toBe(true);
  });

  it('should not display applications count when applications array is missing', () => {
    const mockJobListing = {
      title: 'testTitle',
      company: { sector: 'testSector', name: 'testCompany' },
      deadline: '2025-01-01',
      created: '2025-03-06',
      applications: null,
    };

    const detailsContainer = createDetailsContainer(
      mockJobListing.title,
      mockJobListing.company,
      mockJobListing.deadline,
      mockJobListing.created,
      mockJobListing.applications
    );

    // Ensure no "Total applications" text appears
    expect(detailsContainer.append).toHaveBeenCalled();
    expect(
      detailsContainer.append.mock.calls.some((call) =>
        call.some((el) => el.textContent.includes('Total applications'))
      )
    ).toBe(false);
  });

  it('should display "Total applications: 0" when applications array is empty', () => {
    const mockJobListing = {
      title: 'testTitle',
      company: { sector: 'testSector', name: 'testCompany' },
      deadline: '2025-01-01',
      created: '2025-03-06',
      applications: [],
    };

    const detailsContainer = createDetailsContainer(
      mockJobListing.title,
      mockJobListing.company,
      mockJobListing.deadline,
      mockJobListing.created,
      mockJobListing.applications
    );

    expect(detailsContainer.append).toHaveBeenCalled();
    expect(
      detailsContainer.append.mock.calls.some((call) =>
        call.some((el) => el.textContent.includes('Total applications: 0'))
      )
    ).toBe(true);
  });

  // Checks if the it handles invalid values
  it('handles invalid applications data', () => {
    const mockJobListing = {
      title: 'testTitle',
      company: { sector: 'testSector', name: 'testCompany' },
      deadline: '2025-01-01',
      created: '2025-03-06',
      applications: 'invalid',
    };

    expect(() =>
      createDetailsContainer(
        mockJobListing.title,
        mockJobListing.company,
        mockJobListing.deadline,
        mockJobListing.created,
        mockJobListing.applications
      )
    ).not.toThrow();
  });
});
