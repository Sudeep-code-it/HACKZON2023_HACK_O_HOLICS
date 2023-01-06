const { ethers } = require("hardhat")

async function main() {
    const addr = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const Vote = await ethers.getContractFactory('Vote');
    const vote = await Vote.attach(addr);
    await vote.addproject("a1");
    await vote.like("a1", 6780);
    await vote.dislike("a1", 67909);
    await vote.like("a1", 67890);
    console.log(await vote.display_votes())
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
