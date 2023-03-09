import { deleteOffer } from "./deleteOffer";

const ID = "2";
const INVALID_ID = "";

const TEST_OFFER = {
    id: ID
};

function mockDeleteOffer() {
    return Promise.resolve( {
        ok: true,
        json: () => Promise.resolve(TEST_OFFER),
    });
}

function mockFailDeleteOffer() {
    return Promise.resolve( {
        ok: false,
        statusText: "Missing Offer ID",
    });
}

describe("deleteOffer", () => {
    it("Delete an offer from the API", async () => {
        global.fetch = jest.fn(() => mockDeleteOffer());
        const deletedOffer = await deleteOffer(ID);
        expect(deletedOffer).toEqual(TEST_OFFER);
    });

    it("Fails to delete offer from API", async () => {
        global.fetch = jest.fn(() => mockFailDeleteOffer());
        await expect(deleteOffer(INVALID_ID)).rejects.toThrow("Missing offer ID");
    });
});