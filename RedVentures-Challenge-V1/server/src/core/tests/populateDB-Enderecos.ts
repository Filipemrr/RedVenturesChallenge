import axios from 'axios';
import * as process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

const token = process.env.JWT_TOKEN;

interface Address {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  numero: string;
}

const addressData: Address[] = [
  { cep: '01001-000', logradouro: 'Praça da Sé', bairro: 'Sé', cidade: 'São Paulo', uf: 'SP', numero: '1' },
  { cep: '20040-001', logradouro: 'Rua da Assembleia', bairro: 'Centro', cidade: 'Rio de Janeiro', uf: 'RJ', numero: '10' },
  { cep: '30130-010', logradouro: 'Avenida Afonso Pena', bairro: 'Centro', cidade: 'Belo Horizonte', uf: 'MG', numero: '1000' },
  { cep: '80010-000', logradouro: 'Rua XV de Novembro', bairro: 'Centro', cidade: 'Curitiba', uf: 'PR', numero: '500' },
  { cep: '90010-000', logradouro: 'Avenida Borges de Medeiros', bairro: 'Centro Histórico', cidade: 'Porto Alegre', uf: 'RS', numero: '1500' },
  { cep: '40015-000', logradouro: 'Rua Chile', bairro: 'Centro Histórico', cidade: 'Salvador', uf: 'BA', numero: '200' },
  { cep: '50030-230', logradouro: 'Avenida Guararapes', bairro: 'Santo Antônio', cidade: 'Recife', uf: 'PE', numero: '300' },
  { cep: '60060-400', logradouro: 'Avenida Duque de Caxias', bairro: 'Centro', cidade: 'Fortaleza', uf: 'CE', numero: '400' },
  { cep: '74003-010', logradouro: 'Avenida Goiás', bairro: 'Setor Central', cidade: 'Goiânia', uf: 'GO', numero: '500' },
  { cep: '70040-010', logradouro: 'Esplanada dos Ministérios', bairro: 'Asa Norte', cidade: 'Brasília', uf: 'DF', numero: '1' },
  { cep: '88010-001', logradouro: 'Rua Felipe Schmidt', bairro: 'Centro', cidade: 'Florianópolis', uf: 'SC', numero: '10' },
  { cep: '29010-100', logradouro: 'Rua Sete de Setembro', bairro: 'Centro', cidade: 'Vitória', uf: 'ES', numero: '20' },
  { cep: '58010-650', logradouro: 'Avenida Getúlio Vargas', bairro: 'Centro', cidade: 'João Pessoa', uf: 'PB', numero: '30' },
  { cep: '59010-000', logradouro: 'Avenida Rio Branco', bairro: 'Cidade Alta', cidade: 'Natal', uf: 'RN', numero: '40' },
  { cep: '57020-900', logradouro: 'Avenida da Paz', bairro: 'Centro', cidade: 'Maceió', uf: 'AL', numero: '50' },
  { cep: '49010-000', logradouro: 'Avenida Ivo do Prado', bairro: 'Centro', cidade: 'Aracaju', uf: 'SE', numero: '60' },
  { cep: '64000-100', logradouro: 'Avenida Frei Serafim', bairro: 'Centro', cidade: 'Teresina', uf: 'PI', numero: '70' },
  { cep: '65010-000', logradouro: 'Rua Grande', bairro: 'Centro', cidade: 'São Luís', uf: 'MA', numero: '80' },
  { cep: '69005-000', logradouro: 'Avenida Eduardo Ribeiro', bairro: 'Centro', cidade: 'Manaus', uf: 'AM', numero: '90' },
  { cep: '66010-000', logradouro: 'Avenida Presidente Vargas', bairro: 'Campina', cidade: 'Belém', uf: 'PA', numero: '100' },
  { cep: '68900-073', logradouro: 'Rua Cândido Mendes', bairro: 'Centro', cidade: 'Macapá', uf: 'AP', numero: '110' },
  { cep: '77001-000', logradouro: 'Quadra 101 Sul', bairro: 'Plano Diretor Sul', cidade: 'Palmas', uf: 'TO', numero: '120' },
  { cep: '76801-000', logradouro: 'Avenida Sete de Setembro', bairro: 'Centro', cidade: 'Porto Velho', uf: 'RO', numero: '130' },
  { cep: '69900-100', logradouro: 'Rua Benjamin Constant', bairro: 'Centro', cidade: 'Rio Branco', uf: 'AC', numero: '140' },
  { cep: '69301-150', logradouro: 'Avenida Capitão Júlio Bezerra', bairro: 'Centro', cidade: 'Boa Vista', uf: 'RR', numero: '150' },
  { cep: '78005-100', logradouro: 'Avenida Getúlio Vargas', bairro: 'Centro Norte', cidade: 'Cuiabá', uf: 'MT', numero: '160' },
  { cep: '79002-030', logradouro: 'Rua 14 de Julho', bairro: 'Centro', cidade: 'Campo Grande', uf: 'MS', numero: '170' },
];

async function createAddress(address: Address) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(
      `http://localhost:3000/address/novoEndereco`,
      address,
      config,
    );
    console.log('Endereço criado com sucesso:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao criar endereço:', error.response?.data);
    } else {
      console.error('Erro desconhecido:', error);
    }
  }
}

async function sendAddressData() {
  for (const address of addressData) {
    await createAddress(address);
  }
}

sendAddressData();