// basic taks
const ethers = require('hardhat');
const expect = require('chai');

describe("Token", function() {
    beforeEach( async function(){
        // fetch token from blockchain
        const Token = await ethers.getContractFactory("Token") // Import
        let token = await Token.deploy(); // deployed
    })

    it("Has Baisc Token with Name", async function() {
        // read
        const Name = await Token.name(); // get the token Name
        // check the name
        console.log(Name); // log the name
        // or
        expect(Name).to.equal('My Token Here');
    });

    it("Has Baisc Token with Symbol", async function() {
        // read
        const Symbol = await Token.symbol(); // get the token Symbol
        // check the Symbol
        console.log(Symbol); // log the Symbol
        // or
        expect(Symbol).to.equal('NAZU');
    });
});

// 3. Testing Contract: 32:00