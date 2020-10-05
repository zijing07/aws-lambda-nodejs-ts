import axios from "axios";

describe("Integration Test", () => {
    it("hello world integration test", async () => {
        const query = { a: "hi" };
        const response = await axios.get("http://localhost:3000/hello", {
            params: query
        });

        expect(response.status).toEqual(200);
        expect(response.data).toEqual(`Queries: ${JSON.stringify(query)}`);
    });
});