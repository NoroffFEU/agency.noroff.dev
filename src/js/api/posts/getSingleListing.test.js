import { getSingleListing } from "./getSingleListing";

const ID = "1";
const INVALID_ID = "";

const TEST_ITEM = {
    id: ID
};

function mockGetListing() {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(TEST_ITEM),
    });
}

function mockFailGetListing() {
    return Promise.resolve({
        ok: false,
        statusText: "Bad request",
    });
}

describe("getListing", () => {
    it("Displays a single listing from the API", async () => {
        global.fetch = jest.fn(() => mockGetListing());
        const idListing = await getSingleListing(ID);
        expect(idListing).toEqual(TEST_ITEM);
    });

    it("Fails to display a single listing from the API", async () => {
        global.fetch = jest.fn(() => mockFailGetListing());
        await expect(getSingleListing(INVALID_ID)).rejects.toThrow("Get requires a listingID");
    });
});
