import { deleteSingleListing } from "./deleteSingleListing";

const ID = "1";
const INVALID_ID = "";

const TEST_ITEM = {
    id: ID
};

function mockDeleteListing() {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(TEST_ITEM),
    });
}

function mockFailDeleteListing() {
    return Promise.resolve({
        ok: false,
        statusText: "Get requires a listingID",
    });
}

describe("deleteSingleListing", () => {
    it("Deletes existing listing to the API", async () => {
        global.fetch = jest.fn(() => mockDeleteListing());
        const deletedListing = await deleteSingleListing(ID);
        //expect(deleteSingleListing).toHaveBeenCalledWith(`/products/${listingid}`);
        expect(deletedListing).toEqual(TEST_ITEM);
    });

    it("Fails to delete listing from the API", async () => {
        global.fetch = jest.fn(() => mockFailDeleteListing());
        await expect(deleteSingleListing(INVALID_ID)).rejects.toThrow("Get requires a listingID");
    });
});
