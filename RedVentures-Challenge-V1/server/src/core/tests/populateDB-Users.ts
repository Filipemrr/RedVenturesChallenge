import axios from 'axios';

interface User {
  email: string;
  name: string;
  password: string;
}

const usersData: User[] = [
  { email: 'john.doe@example.com', name: 'johnDoe', password: 'senha123' },
  {
    email: 'jane.smith@example.com',
    name: 'janeSmith',
    password: 'senha123',
  },
  {
    email: 'william.johnson@example.com',
    name: 'willJohnson',
    password: 'senha123',
  },
  {
    email: 'sarah.brown@example.com',
    name: 'sarahBrown',
    password: 'senha123',
  },
  {
    email: 'michael.davis@example.com',
    name: 'mikeDavis',
    password: 'senha123',
  },
];

async function createUser(user: User) {
  try {
    const response = await axios.post(
      `http://localhost:3000/users/createUser`,
      user,
    );
    console.log('Usuário criado com sucesso:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao criar usuário:', error.response?.data);
    }
  }
}

async function sendUserData() {
  for (const user of usersData) {
    await createUser(user);
  }
}

sendUserData();
