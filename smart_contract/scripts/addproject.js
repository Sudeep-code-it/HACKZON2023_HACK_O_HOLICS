const { ethers } = require("hardhat")

async function addproject(pid) {
    const addr = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const Vote = await ethers.getContractFactory('Vote')
    const vote = await Vote.attach(addr)

    await vote.addproject(pid);
}

module.exports = addproject(pid).then(() => process.exit(0)).catch(() => {
    process.exit(1);
});