const { expect } = require("chai");
const { testing } = require("../scripts/testing.js");

describe("ContFoo", function () {

    let vars;

    beforeEach(async function () {
        vars = await testing();
    });

    describe("Feature 1", async function () {
        it("Sub checks", async function () {
        })
    });
});