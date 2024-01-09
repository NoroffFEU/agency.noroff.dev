import { getSearchTermsUsers, getSearchTermsListings } from './getSearchTerms.js';

describe('getSearchTermsUsers', () => {
  const userData = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ];

  it('should return an array of users that match the search term in their name', () => {
    const result = getSearchTermsUsers(userData, 'doe');
    expect(result).toEqual([{ name: 'John Doe', email: 'john.doe@example.com' }]);
  });

  it('should return an array of users that match the search term in their email', () => {
    const result = getSearchTermsUsers(userData, 'mith');
    expect(result).toEqual([{ name: 'Jane Smith', email: 'jane.smith@example.com' }]);
  });

  it('should return an array of users that match the search term in both their name and email', () => {
    const result = getSearchTermsUsers(userData, 'john');
    expect(result).toEqual([
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    ]);
  });
});

describe('getSearchTermsListings', () => {
  const listingData = [
    { id: 1, name: 'Software Engineer', company: { name: 'Google' } },
    { id: 2, name: 'Data Analyst', company: { name: 'Facebook' } },
    { id: 3, name: 'Marketing Manager', company: { name: 'Amazon' } },
  ];

  it('should return an array of listings that match the search term in their job title', () => {
    const result = getSearchTermsListings(listingData, 'engineer');
    expect(result).toEqual([{ id: 1, name: 'Software Engineer', company: { name: 'Google' } }]);
  });

  it('should return an array of listings that match the search term in their company name', () => {
    const result = getSearchTermsListings(listingData, 'google');
    expect(result).toEqual([{ id: 1, name: 'Software Engineer', company: { name: 'Google' } }]);
  });

  it('should return an object that match the searched ID', () => {
    const result = getSearchTermsListings(listingData, '1');
    expect(result).toEqual([{ id: 1, name: 'Software Engineer', company: { name: 'Google' } }]);
  });
});
