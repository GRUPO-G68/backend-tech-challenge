import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedFuncionarios() {
  try {
    await prisma.funcionario.createMany({
      data: [
        {
          nome: "CARLOS",
          cpf: "65332844018",
          email: "carlos@example.com",
        },
        {
          nome: "VIVIAN",
          cpf: "46993132052",
          email: "vivian@example.com",
        },
      ],
    });
    console.log("Funcionários inseridos com sucesso");
  } catch (error) {
    console.error("Erro ao inserir Funcionarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedClientes() {
  try {
    await prisma.cliente.createMany({
      data: [
        {
          nome: "João",
          cpf: "12345678901",
          email: "joao@example.com",
        },
        {
          nome: "Maria",
          cpf: "98765432123",
          email: "maria@example.com",
        },
      ],
    });

    console.log("Clientes inseridos com sucesso");
  } catch (error) {
    console.error("Erro ao inserir clientes:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedCategoria() {
  try {
    await prisma.categoria.createMany({
      data: [
        {
          descricao: "lanche",
        },
        {
          descricao: "bebida",
        },
        {
          descricao: "acompanhamento",
        },
      ],
    });
    console.log("Categorias inseridas com sucesso");
  } catch (error) {
    console.error("Erro ao inserir Categorias:", error);
  } finally {
    await prisma.$disconnect();
  }
}
async function seedSituacaoPedido() {
  try {
    await prisma.situacao.createMany({
      data: [
        {
          descricao: "Recebido",
        },
        {
          descricao: "Em Preparação",
        },
        {
          descricao: "Pronto",
        },
        {
          descricao: "Finalizado",
        },
      ],
    });
    console.log("Situações inseridas com sucesso");
  } catch (error) {
    console.error("Erro ao inserir Categorias:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedProdutos() {
  try {
    await prisma.produto.createMany({
      data: [
        {
          idCategoria: 1,
          nome: "Cachorro quente",
          descricao:
            "Cachorro quente com 1 salsicha, molho, milho, ervilha e batata palha",
          preco: 15,
        },
        {
          idCategoria: 1,
          nome: "Cachorro quente especial",
          descricao:
            "Cachorro quente com 2 salsicha, molho, milho, ervilha, bacon, pure de batata e batata palha",
          preco: 19,
        },
        {
          idCategoria: 1,
          nome: "Frangão",
          descricao:
            "1 salsicha, frango desfiado, molho de tomate, bacon, calabresa e batata palha",
          preco: 25,
        },
        {
          idCategoria: 3,
          nome: "Bata frita",
          descricao: "A classica, bem sequinha",
          preco: 10,
        },
        {
          idCategoria: 3,
          nome: "Batata frita rústica",
          descricao: "Aquela batata mais rustica, macia por dentro",
          preco: 14,
        },
        {
          idCategoria: 2,
          nome: "Coca-cola lata",
          descricao: "",
          preco: 6,
        },
        {
          idCategoria: 2,
          nome: "Sprite lata",
          descricao: "",
          preco: 6,
        },
        {
          idCategoria: 2,
          nome: "Suco",
          descricao: "",
          preco: 8,
        },
        {
          idCategoria: 2,
          nome: "Cerveja lata",
          descricao: "",
          preco: 8,
        },
      ],
    });
    console.log("Produtos inseridas com sucesso");
  } catch (error) {
    console.error("Erro ao inserir Produtos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  await seedFuncionarios();
  await seedClientes();
  await seedCategoria();
  await seedSituacaoPedido()
  await seedProdutos();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
