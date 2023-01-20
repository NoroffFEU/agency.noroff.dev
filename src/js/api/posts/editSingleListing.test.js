import { editSingleListing } from "./editSingleListing";

const ID = "1";
const INVALID_ID = "";

const TEST_ITEM = {
    id: ID
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
        statusText: "Get requires a listingID",
    });
}

describe("updateListing", () => {
    it("Updates existing listing to the API", async () => {
        global.fetch = jest.fn(() => mockUpdateListing());
        const updatedListing = await editSingleListing(ID);
        expect(updatedListing).toEqual(TEST_ITEM);
    });

    it("Fails to update listing to the API", async () => {
        global.fetch = jest.fn(() => mockFailUpdateListing());
        await expect(editSingleListing(INVALID_ID)).rejects.toThrow("Get requires a listingID");
    });
});
