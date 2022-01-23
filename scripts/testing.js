const {BigNumber} = require("ethers");
const testing = async function() {
    // setup
    let [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
    const balance = await owner.getBalance();

    // test
    let contract = await ethers.getContractFactory("ContFoo");
    const ContFoo = await contract.deploy();

    return {
        ContFoo,
        balance,
        owner,
        addr1,
        addr2,
        addr3,
        addrs
    };
}

module.exports = {
    testing
}