let fileInput = document.getElementById('upL');
console.log(fileInput);
fileInput.onchange = () {
    let fileInput = document.getElementById('upL');
    console.log(fileInput.value);
    const Moralis = require("moralis").default; 
    const fs = require("fs"); 
    require("dotenv").config();


    const fileUploads = [
        {
            path:fileInput,
            content: fs.readFileSync(fileInput, {encoding:"base64"})
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

    uploadToIpfs();
}