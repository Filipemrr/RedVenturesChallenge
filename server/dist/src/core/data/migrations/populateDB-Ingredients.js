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
        imageInactive: "https://cdn.discordapp.com/attachments/1017600421335937104/1247639601179398265/image.png?ex=6660c26c&is=665f70ec&hm=959a1580c8d9a18a9858cdf39aae55d1875f28b20216c6562ba0736874d65029&",
        imageActive: "https://cdn.discordapp.com/attachments/1017600421335937104/1247640408528523304/image.png?ex=6660c32d&is=665f71ad&hm=a285a7faca51cc08c17b23c0a69954065c071fd49eb8e68cb23132f6c210a906&",
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