// import getListing from somewhere

const ID = "numbers";

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
        const idListing = await getListing(ID);
        expect(idListing).toEqual(TEST_ITEM);
    });

    it("Fails to dsplay a single listing from the API", async () => {
        global.fetch = jest.fn(() => mockFailGetListing());
        await expect(getListing).rejects.toThrow("Bad request");
    });
});
