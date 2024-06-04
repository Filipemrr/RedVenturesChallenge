"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const brothFlavors = [
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
const proteinFlavors = [
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
        name: "Karaague",
        description: "Three units of friend chicken, moyashi, ajitama egg and other vegetables",
        price: 12
    },
];
async function createBroth(broth) {
    try {
        const response = await axios_1.default.post(`http://localhost:3000/meals/addNewBroth`, broth);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error creating broth:', error.response?.data);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
async function createProtein(protein) {
    try {
        const response = await axios_1.default.post(`http://localhost:3000/meals/addNewProtein`, protein);
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error('Error creating protein:', error.response?.data);
        }
        else {
            console.error('Unknown error:', error);
        }
    }
}
async function sendBrothData() {
    for (const broth of brothFlavors) {
        await createBroth(broth);
    }
}
async function sendProteinData() {
    for (const protein of proteinFlavors) {
        await createProtein(protein);
    }
}
sendBrothData();
sendProteinData();
//# sourceMappingURL=populateDB-Ingredients.js.map