import { searchFunction } from "./searchFunctionTemplate.js";

describe("searchFunction", () => {
  let container;
  let searchInput;

  beforeEach(() => {
    container = document.createElement("div");
    container.classList.add("listingContainer");
    searchInput = document.createElement("input");
    searchInput.id = "searchListing";
    document.body.appendChild(container);
    document.body.appendChild(searchInput);
  });

  afterEach(() => {
    document.body.removeChild(container);
    document.body.removeChild(searchInput);
  });

  it("should render listings when search term is valid", () => {
    searchInput.value = "test";
    searchFunction();
    expect(container.innerHTML).not.toBe("");
  });

  it("should not render listings when search term is too short", () => {
    searchInput.value = "te";
    searchFunction();
    expect(container.innerHTML).toBe("");
  });

  it("should render search not found message when search term does not match any listings", () => {
    searchInput.value = "notfound";
    searchFunction();
    expect(container.innerHTML).toContain("Search not found");
  });
});