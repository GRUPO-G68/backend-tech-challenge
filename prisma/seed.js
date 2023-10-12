import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedFuncionarios() {
    try {
        await prisma.funcionario.createMany({
            data: [
            {
                nome: 'CARLOS',
                cpf: '65332844018',
                ctps_numero: '1234567890',
                ctps_serie: 'ABC12',
                ctps_emissao: new Date('2023-01-15'),
                email: 'carlos@example.com',
                data_inicio: new Date('2023-10-09'),
                celular: '9876543210',
            },
            {
                nome: 'VIVIAN',
                cpf: '46993132052',
                ctps_numero: '9876543210',
                ctps_serie: 'XYZ34',
                ctps_emissao: new Date('2023-02-20'),
                email: 'vivian@example.com',
                data_inicio: new Date('2023-10-10'),
                celular: '1234567890',
            },
            ],
        });
        console.log('Funcionários inseridos com sucesso');
    } catch (error) {
      console.error('Erro ao inserir Funcionarios:', error);
    } finally {
      await prisma.$disconnect();
    }

  await prisma.$disconnect();
}

async function seedClientes() {
    try {
      await prisma.cliente.createMany({
        data: [
          {
            nome: 'João',
            cpf: '12345678901',
            email: 'joao@example.com',
            celular: '9876543210',
          },
          {
            nome: 'Maria',
            cpf: '98765432123',
            email: 'maria@example.com',
            celular: '1234567890',
          },
        ],
      });
  
      console.log('Clientes inseridos com sucesso');
    } catch (error) {
      console.error('Erro ao inserir clientes:', error);
    } finally {
      await prisma.$disconnect();
    }
}




seedFuncionarios()
seedClientes()