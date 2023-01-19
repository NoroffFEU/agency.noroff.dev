import { create } from "./create";

const LIST_DATA = "Input information"

const TEST_ITEM = LIST_DATA

function mockCreatePost() {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(TEST_ITEM),
    });
}

function mockFailCreatePost() {
    return Promise.resolve({
        ok: false,
        statusText: "Bad request",
    });
}

describe("createPost", () => {
    it("Creates a new item to the API", async () => {
        global.fetch = jest.fn(() => mockCreatePost());
        const newListing = await create(LIST_DATA);
        expect(newListing).toEqual(TEST_ITEM);
    });

    it("Fails to create a new item to the API", async () => {
        global.fetch = jest.fn(() => mockFailCreatePost());
        await expect(create).rejects.toThrow("alert is not defined");
    });
});
