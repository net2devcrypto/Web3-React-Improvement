
// ** THIS TUTORIAL IS FOR EDUCATIONAL PURPOSES ONLY**
// ** NOT FINANCIAL ADVISE **
// ** USE IT AT YOUR OWN RISK, I'M NOT RESPONSIBLE FOR ANY USE **

// Please support my channel!
// Donate to the address: net2dev.eth

// Follow me on social media!
// #tiktok
// https://www.tiktok.com/@net2dev

// Net2Dev How to Use Alchemy to Send EIP-1559 Based transactions with
// optimized gas fees

// STEP 1
// Register with alchemy.com
// STEP 2
// Create an App in Alchemy and export API HTTP address.
// STEP 3
// Install the required Alchemy ReactJS dependencies.

//    npm i @alch/alchemy-web3   

// STEP 4
// Add Code in React App.js

    //import Alchemy web3 package
    import { createAlchemyWeb3 } from '@alch/alchemy-web3'

    //store Alchemy Web3 API call in "Web3Alc"
    const Web3Alc = createAlchemyWeb3("https://eth-rinkeby.alchemyapi.io/v2/AHgaOmnZfUDdZjPGFh2AY7xDQO5DVvtL");

    // Inject the EIP-1559 Calls in a Web3 async function (Example to mint NFTs:)

    async function mint() {
        var _mintAmount = Number(document.querySelector("[name=amount]").value); 
        var mintRate = Number(await contract.methods.cost().call()); 
        var totalAmount = mintRate * _mintAmount;
        //STARTS BELOW:
        await Web3Alc.eth.getMaxPriorityFeePerGas().then((tip) => { 
          Web3Alc.eth.getBlock('pending').then((block) => {
              var baseFee = Number(block.baseFeePerGas);
              var maxPriority = Number(tip);
              var maxFee = baseFee + maxPriority
          contract.methods.mint(account, _mintAmount)
              .send({ from: account,
                value: String(totalAmount),
                maxFeePerGas: maxFee,
                maxPriorityFeePerGas: maxPriority});
          });
      })
  }

