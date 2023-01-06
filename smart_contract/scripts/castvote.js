const { ethers } = require("hardhat")

async function castvote(pid, aid, vote_type) {
    const addr = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const Vote = await ethers.getContractFactory('Vote');
    const vote = await Vote.attach(addr);

    if(vote_type === "up"){
        await vote.like(pid, aid);
    }
    else{
        await vote.dislike(pid, aid);
    }
}

module.exports = castvote(pid, aid, vote_type).then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});
