# joi-validation

Você foi contratado para dar continuidade no desenvolvimento de um sistema de gerenciamento de estoque de uma grande loja de eletrodomésticos!

Bem, Juninho, o desenvolvedor que estava trabalhando antes nesse projeto, não fez uma lógica de validação nas rotas que alteram o conteúdo armazenado pelo sistema. Assim, qualquer dado ou quaisquer valores inválidos podem ser inseridos! Pode-se inclusive alterar o id de um produto já existente, potencialmente destruindo as funcionalidades do sistema! 😨

Usando a biblioteca _joi_, modifique o servidor para que responda com status 422 ao enviar objetos num formato diferente do seguinte:

```json
{
  "name": "Nome do produto",
  "description": "descricao do produto",
  "categories": [1, 2, 3, 4],
  "price": 10.97
}
```

- Na inserção de produtos, todos os campos são obrigatórios. Na atualização, não.
- Todos os textos têm um mínimo de 10 caracteres.
- **Dica**: utilize `joi.array().items(joi.number())` para validar se os valores de uma array são numéricos
