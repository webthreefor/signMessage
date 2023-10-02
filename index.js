import { ethers } from "ethers";





const main = async () => {
       


    const privateKey = "";
    console.log("address",wallet.address);
    const signer = new ethers.Wallet(privateKey);
    const messageKeccak = ethers.keccak256(ethers.toUtf8Bytes("your message"));
    console.log("message Keccak:", messageKeccak);
    const messageBytes = ethers.getBytes(messageKeccak);
    console.log("messageHash", messageBytes.toString());
    const signature = await signer.signMessage(messageBytes);
    console.log("Signature",signature);    
}




main(); 
