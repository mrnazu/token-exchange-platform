/* eslint-disable no-unused-vars */
const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Token', () => {
  let token

  beforeEach(async () => {
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy('NAZU Sec', 'NAZU', '1000000')
  })

  describe('Deployment', () => {
    const name = 'NAZU Sec'
    const symbol = 'NAZU'
    const decimals = '18'
    const totalSupply = tokens('1000000')

    it('has correct name', async () => {
      expect(await token.name()).to.equal(name)
    })

    it('has correct symbol', async () => {
      expect(await token.symbol()).to.equal(symbol)
    })

    it('has correct decimals', async () => {
      expect(await token.decimals()).to.equal(decimals)
    })

    it('has correct total supply', async () => {
      expect(await token.totalSupply()).to.equal(totalSupply)
    })

    it('has correct total supply', async () => {
      // Retrieve the deployer account
      const [deployer] = await ethers.getSigners();
    
      const deployerBalance = await token.balanceOf(deployer.address);
    
      expect(deployerBalance).to.equal(totalSupply);
    });

    describe('Sending Token', function() {
      it('Transfers token balances', async function() {
        // Retrieve the deployer account
        const [deployer] = await ethers.getSigners();
        const deployerBalance = await token.balanceOf(deployer.address);
        
        token.connect(deployer).transfer('0x.000', '100')
      })
    })

  })

})

// Token Transfer 12:19