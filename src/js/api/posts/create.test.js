// import { createListing } from somewhere;

const TITLE = "A job title";
const COMPANYNAME = "Some comapany";
const BODY = "Is this showing";
const DEADLINEDATE = "A date"

const TEST_ITEM = {
    title: TITLE,
    company: COMPANYNAME,
    body: BODY,
    date: DEADLINEDATE
};

function mockCreateListing() {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(TEST_ITEM),
    });
}

function mockFailCreateListing() {
    return Promise.resolve({
        ok: false,
        statusText: "Bad request",
    });
}

describe("createListing", () => {
    it("Creates a new item to the API", async () => {
        global.fetch = jest.fn(() => mockCreateListing());
        const newlisting = await createListing(TITLE, COMPANYNAME, BODY, DEADLINEDATE);
        expect(newlisting).toEqual(TEST_ITEM);
    });

    it("Fails to create a new item to the API", async () => {
        global.fetch = jest.fn(() => mockFailCreateListing());
        await expect(createListing).rejects.toThrow("Bad request");
    });
});
