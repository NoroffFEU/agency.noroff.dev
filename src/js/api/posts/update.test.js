// import updateListing from somewhere

const ID = "numbers";
const TITLE = "A job title";
const COMPANYNAME = "Some comapany";
const BODY = "Is this showing";
const DEADLINEDATE = "A date"

const TEST_ITEM = {
    id: ID,
    title: TITLE,
    company: COMPANYNAME,
    body: BODY,
    date: DEADLINEDATE
};

function mockUpdateListing() {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(TEST_ITEM),
    });
}

function mockFailUpdateListing() {
    return Promise.resolve({
        ok: false,
        statusText: "Bad request",
    });
}

describe("updateListing", () => {
    it("Updates existing listing to the API", async () => {
        global.fetch = jest.fn(() => mockUpdateListing());
        const updatedListing = await updateListing(ID, TITLE, COMPANYNAME, BODY, DEADLINEDATE);
        expect(updatedListing).toEqual(TEST_ITEM);
    });

    it("Fails to update listing to the API", async () => {
        global.fetch = jest.fn(() => mockFailUpdateListing());
        await expect(updateListing).rejects.toThrow("Bad request");
    });
});
