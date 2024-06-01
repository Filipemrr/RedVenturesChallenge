import axios from 'axios';
import * as dotenv from 'dotenv';
import { IngredientDTO } from "../../modules/meals/dtos/Ingredient.dto";

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
    imageInactive: "https://tech.redventures.com.br/icons/karaangue/inactive.svg",
    imageActive: "https://tech.redventures.com.br/icons/karaangue/active.svg",
    name: "Karaangue",
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