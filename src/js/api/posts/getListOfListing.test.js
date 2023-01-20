// Author: Åke Ek

import { getListOfListings } from "./getListOfListings";

const TEST_ITEM = {
    title: TITLE,
    location: LOCATION,
    deadline: DEADLINE,
};

function mockGetList() {
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

describe("getListOfListings", () => {
    it("Displays a list of listings from the API", async () => {
        global.fetch = jest.fn(() => mockGetList());
        const list = await getListOfListings();
        expect(list).toBeInstanceOf(Array);
        expect(list[0]).toHaveProperty('title');
        expect(list[0]).toHaveProperty('location');
        expect(list[0]).toHaveProperty('deadline');
    });

    it("Fails to display from the API", async () => {
        global.fetch = jest.fn(() => mockFailGetListing());
        await expect(getListOfListings).rejects.toThrow("Get requires a listingID");
    });
});