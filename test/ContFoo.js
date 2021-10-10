const { expect } = require("chai");
const { testing } = require("../script/testing.js");

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