

const Moralis = require("moralis").default; 
const fs = require("fs"); 
require("dotenv").config();


const fileUploads = [
    {
        path:"test1.jpg",
        content: fs.readFileSync("test1.jpg", {encoding:"base64"})
    }
]

async function uploadToIpfs(){
    await Moralis.start({
        apiKey: process.env.MORALIS_KEY
    })


    const res = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: fileUploads
    })

    console.log(res.result)

}

async function retrieve() {


    try {
    await Moralis.start({
        apiKey: "uslzd0ayhifWFTR1j94YexJkVJKHyPcypTGXbyoTWc3PhUJGYx8y5p6IZ6K9qOtc"
    });

    const response = await Moralis.EvmApi.block.getBlock({
        "chain": "0xaa36a7",
        "blockNumberOrHash": "QmXNTAneJxRj6BLNSw16HgcRVhwhbt7sLSHVRovgiv2R7r\\test1.jpg"
    });

    console.log(response.raw);
    } catch (e) {
    console.error(e);
    }
}

uploadToIpfs();
// retrieve();