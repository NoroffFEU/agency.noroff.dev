import { searchFunction } from "./searchFunctionTemplate.js";
import { getListOfListings } from "../../api/posts/getListOfListings.js";
import { renderListings } from "../../templates/listings/renderListings.js";
import { getSearchTermsListings } from "./getSearchTerms.js";
import { listingNotFound } from "./searchNotFoundDisplay.js";

jest.mock("../../api/posts/getListOfListings.js");
jest.mock("../../templates/listings/renderListings.js");
jest.mock("./searchFunctionTemplate.js");
jest.mock("./searchNotFoundDisplay.js");
jest.mock("../../templates/listings/renderListings.js")

describe("searchFunction", () => {

  it("should render search results if the item exists when search input is 3 or more characters", () => {
    getSearchTermsListings.mockReturnValueOnce("abc");
    searchFunction();
    expect(getSearchTermsListings).toHaveBeenCalledWith(getListOfListings, "abc");
    expect(renderListings).toHaveBeenCalledWith("abc");
  });

  it("should display 'Something went wrong' when search input matches no listings", () => {
    getSearchTermsListings.mockReturnValueOnce("def");
    searchFunction();
    expect(getSearchTermsListings).toHaveBeenCalledWith(getListOfListings, "def");
    expect(listingNotFound).toHaveBeenCalledWith();
  });
});