import React from 'react'

const altura = require('@altura/sdk');

const alturaSDK = new altura.AlturaSDK({
  projectId: 'YOUR_PROJECT_ID',
  apiKey: 'YOUR_API_KEY',
});

async function App(nftId, propertyName, propertyValue) {
  try {
    const nft = await alturaSDK.smartNFTs.get(nftId);
    const update = {
      properties: {
        [propertyName]: propertyValue,
      },
    };
    await alturaSDK.smartNFTs.update(nftId, update);
    console.log(`Property ${propertyName} updated to ${propertyValue} for NFT ${nftId}`);
  } catch (error) {
    console.log(error);
  }
}

export default App