import { searchFunction } from "./searchFunctionTemplate.js";
import { getListOfListings } from "../../api/posts/getListOfListings.js";
import { renderListings } from "../../templates/listings/renderListings.js";
import { getSearchTermsListings } from "./getSearchTerms.js";
import { listingNotFound } from "./searchNotFoundDisplay.js";

jest.mock("../../api/posts/getListOfListings.js");
jest.mock("../../templates/listings/renderListings.js");
jest.mock("./getSearchTerms.js");
jest.mock("./searchNotFoundDisplay.js");

describe("searchFunction", () => {
  let searchInput;
  let container;

  beforeEach(() => {
    searchInput = document.createElement("input");
    searchInput.id = "searchListing";
    container = document.createElement("div");
    container.classList.add("listingContainer");
    document.body.appendChild(container);
    document.body.appendChild(searchInput);
  });

  afterEach(() => {
    document.body.removeChild(searchInput);
    document.body.removeChild(container);
  });

  it("should render listings when search input is empty", () => {
    searchFunction();
    expect(getListOfListings).toHaveBeenCalled();
    expect(renderListings).toHaveBeenCalledWith(getListOfListings, container);
  });

  it("should render listings when search input is less than 3 characters", () => {
    searchInput.value = "ab";
    searchFunction();
    expect(getListOfListings).toHaveBeenCalled();
    expect(renderListings).toHaveBeenCalledWith(getListOfListings, container);
  });

  it("should render search results when search input is 3 or more characters", () => {
    searchInput.value = "abc";
    getSearchTermsListings.mockReturnValueOnce([{}]);
    searchFunction();
    expect(getSearchTermsListings).toHaveBeenCalledWith(getListOfListings, "abc");
    expect(renderListings).toHaveBeenCalledWith([{}], container);
  });

  it("should display 'No results found' when search input matches no listings", () => {
    searchInput.value = "def";
    getSearchTermsListings.mockReturnValueOnce([]);
    searchFunction();
    expect(getSearchTermsListings).toHaveBeenCalledWith(getListOfListings, "def");
    expect(listingNotFound).toHaveBeenCalledWith(container);
  });
});