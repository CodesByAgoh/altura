/* import React from 'react'

 const altura = require('@altura/sdk');

const alturaSDK = new altura.AlturaSDK({
  projectId: 'YOUR_PROJECT_ID',
  apiKey: 'YOUR_API_KEY',
}); 

const { Altura } = require("@altura/altura-js")

const API_KEY = 'VNJ2K4Q-VBJ4QX9-NNCWWXC-VQV1Q5E';

const altura = new Altura(API_KEY);

const updatedItem = await alturaItem.updateProperty(PROPERTY_NAME, PROPERTY_VALUE);

async function evolve(pokemon, evolution) {
  let newName;
  let newImage;
  let newXp;

          if (evolution === 1) {
            newName = 'Richu';
            newImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.pokemon.com%2Fassets%2Fcms2%2Fimg%2Fpokedex%2Ffull%2F026_f2.png&imgrefurl=https%3A%2F%2Fwww.pokemon.com%2Fus%2Fpokedex%2Fraichu&tbnid=J_KATKptwAzM3M&vet=12ahUKEwig9ZPbw8H9AhVGoScCHZGJCKMQMygBegUIARDaAQ..i&docid=VCS0-ui4x7HO1M&w=475&h=475&itg=1&q=richu%20pokemon&ved=2ahUKEwig9ZPbw8H9AhVGoScCHZGJCKMQMygBegUIARDaAQ';
            newXp = 100;
          } else if (evolution === 2) {
            newName = 'Pikachu';
            newImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Foyster.ignimgs.com%2Fmediawiki%2Fapis.ign.com%2Fpokemon-blue-version%2F8%2F89%2FPikachu.jpg&imgrefurl=https%3A%2F%2Fwww.ign.com%2Fwikis%2Fpokemon-red-blue-yellow-version%2FPikachu&tbnid=56Xz1slOfJmgpM&vet=12ahUKEwiGnbXow8H9AhUznycCHc0TC9kQMygBegUIARDsAQ..i&docid=OERPyHKlwffF3M&w=563&h=579&q=pikachu%20pokemon&ved=2ahUKEwiGnbXow8H9AhUznycCHc0TC9kQMygBegUIARDsAQ';
            newXp = 70;
          } else if (evolution === 3) {
            newName = 'Pichu';
            newImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.pokemon.com%2Fassets%2Fcms2%2Fimg%2Fpokedex%2Ffull%2F172.png&imgrefurl=https%3A%2F%2Fwww.pokemon.com%2Fus%2Fpokedex%2Fpichu&tbnid=5ko3WJgT6zmjOM&vet=12ahUKEwi3wY_Fw8H9AhXvsScCHbGEDUIQMygAegUIARDlAQ..i&docid=IltOgAzQqCXJLM&w=475&h=475&q=pichu%20pokemon&ved=2ahUKEwi3wY_Fw8H9AhXvsScCHbGEDUIQMygAegUIARDlAQ';
            newXp = 50;
          } else {
            console.log('Invalid evolution parameter');
            return;
          }

  try {
    const nft = await altura.smartNFTs.get(pokemon);
    const update = {
      name: newName,
      properties: {
        XP: newXp,
      },
      images: [
        {
          url: newImage,
          mimeType: 'image/png',
          name: 'image',
        },
      ],
    };
    await altura.smartNFTs.update(pokemon, update);
    console.log(`Pokemon NFT ${pokemon} evolved to ${newName}`);
  } catch (error) {
    console.log(error);
  }
}

 To make the NFT evolve, you simply call the evolve function with the ID
of the NFT and the intiger that is corresponding with your desired evolution  

evolve('120', 2)

export default evolve */