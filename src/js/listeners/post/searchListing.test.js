import { getListOfListings } from '../../api/posts/getListOfListings.js';
import { renderListings } from '../../templates/listings/renderListings.js';
import {
  doesListingMatchQuery,
  filterSearchListings,
  searchListings,
  setupSearchHandler,
} from './searchListing.js';

jest.mock('../../api/posts/getListOfListings.js');
jest.mock('../../templates/listings/renderListings.js');

const createInputElement = () => {
  const input = document.createElement('input');
  input.id = 'searchListing';
  return input;
};

describe('searchListings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders listings based on filter', async () => {
    const mockListings = [{ title: 'Test Listing 1' }, { title: 'Another Test Listing' }];

    getListOfListings.mockResolvedValue(mockListings);

    const searchInput = createInputElement();

    document.body.appendChild(searchInput);

    await searchListings();
    searchInput.value = 'Test';
    searchInput.dispatchEvent(new Event('keyup'));

    expect(renderListings).toHaveBeenCalledWith([mockListings[0], mockListings[1]]);
  });
});

describe('filterSearchListings', () => {
  it('returns listings that match the query', () => {
    const listings = [{ title: 'Test' }, { title: 'Example' }];

    const result = filterSearchListings(listings, 'Test');
    expect(result).toEqual([listings[0]]);
  });

  it('returns all listings when query is less than 2 characters', () => {
    const listings = [{ title: 'Test' }, { title: 'Example' }];

    const result = filterSearchListings(listings, 'T');
    expect(result).toEqual(listings);
  });
});

describe('matchesQuery', () => {
  it('returns true if listing title includes query', () => {
    const listing = { title: 'Test Listing' };
    const query = 'Test';

    expect(doesListingMatchQuery(listing, query)).toBeTruthy();
  });

  it('returns true if query is less than 2 characters', () => {
    const listing = { title: 'Test Listing' };
    const query = 'T';

    expect(doesListingMatchQuery(listing, query)).toBeTruthy();
  });

  it('returns false if listing title does not include query', () => {
    const listing = { title: 'Test Listing' };
    const query = 'Nonexistent';

    expect(doesListingMatchQuery(listing, query)).toBeFalsy();
  });
});

describe('setupSearchHandler', () => {
  it('sets up the onkeyup event listener', () => {
    const input = createInputElement();

    document.body.appendChild(input);

    const mockOnSearch = jest.fn();
    setupSearchHandler(mockOnSearch, input);

    input.value = 'Test';
    input.dispatchEvent(new Event('keyup'));

    expect(mockOnSearch).toHaveBeenCalledWith('Test');

    document.body.removeChild(input);
  });
});
