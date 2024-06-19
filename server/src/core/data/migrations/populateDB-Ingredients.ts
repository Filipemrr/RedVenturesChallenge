import axios from 'axios';
import * as dotenv from 'dotenv';
import {IngredientDTO} from "../../../modules/meals/dtos/Ingredient.dto";

dotenv.config();

const brothFlavors: IngredientDTO[] = [
  {
    type: "broth",
    imageInactive: "https://tech.redventures.com.br/icons/salt/inactive.svg",
    imageActive: "https://tech.redventures.com.br/icons/salt/active.svg",
    name: "Salt",
    description: "Simple like the seawater, nothing more",
    price: 10
  },
  {
    type: "broth",
    imageInactive: "https://tech.redventures.com.br/icons/shoyu/inactive.svg",
    imageActive: "https://tech.redventures.com.br/icons/shoyu/active.svg",
    name: "Shoyu",
    description: "The good old and traditional soy sauce",
    price: 10
  },
  {
    type: "broth",
    imageInactive: "https://tech.redventures.com.br/icons/miso/inactive.svg",
    imageActive: "https://tech.redventures.com.br/icons/miso/active.svg",
    name: "Miso",
    description: "Paste made of fermented soybeans",
    price: 12
  },
];
const proteinFlavors: IngredientDTO[] = [
  {
    type: "protein",
    imageInactive: "https://tech.redventures.com.br/icons/pork/inactive.svg",
    imageActive: "https://tech.redventures.com.br/icons/pork/active.svg",
    name: "Chasu",
    description: "A sliced flavourful pork meat with a selection of season vegetables.",
    price: 10
  },
  {
    type: "protein",
    imageInactive: "https://tech.redventures.com.br/icons/yasai/inactive.svg",
    imageActive: "https://tech.redventures.com.br/icons/yasai/active.svg",
    name: "Yasai Vegetarian",
    description: "A delicious vegetarian lamen with a selection of season vegetables",
    price: 10
  },
  {
    type: "protein",
    imageInactive: "https://cdn.discordapp.com/attachments/862831874765881365/1253020984580112467/image.png?ex=6674563a&is=667304ba&hm=cc105cd498c950323c598fd029623fef72a71b7a24cda3d0cae9800908ca05fb&",
    imageActive: "https://cdn.discordapp.com/attachments/862831874765881365/1253021447375425616/image.png?ex=667456a9&is=66730529&hm=31522edbc52373dd03cb47ed3951bd108bcea518dc7cbd89aadc6d5cf1a0b02f&",
    name: "Karaague",
    description: "Three units of friend chicken, moyashi, ajitama egg and other vegetables",
    price: 12
  },
];

async function createBroth(broth: IngredientDTO) {
  try {
    const response = await axios.post(
        `http://localhost:3000/meals/addNewBroth`,
        broth,
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error creating broth:', error.response?.data);
    } else {
      console.error('Unknown error:', error);
    }
  }
}
async function createProtein(protein: IngredientDTO) {
  try {
    const response = await axios.post(
        `http://localhost:3000/meals/addNewProtein`,
        protein,
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error creating protein:', error.response?.data);
    } else {
      console.error('Unknown error:', error);
    }
  }
}

async function sendBrothData() {
  for (const broth of brothFlavors) {
    await createBroth(broth);
  }
}
async function sendProteinData(){
  for (const protein of proteinFlavors) {
    await createProtein(protein);
  }
}

sendBrothData();
sendProteinData();