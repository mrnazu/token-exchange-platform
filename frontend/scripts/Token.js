// basic taks
const ethers = require('hardhat');
const expect = require('chai');

describe("Token", function() {
    it("Baisc Token with Name", async function() {
        // fetch token from blockchain
        const Token = await ethers.getContractFactory("Token") // Import
        let token = await Token.deploy(); // deployed
        // read
        const Name = await Token.name(); // get the token Name
        // check the name
        console.log(Name); // log the name
        // or
        expect(Name).to.equal('My Token Here');
    });
});