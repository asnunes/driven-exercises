# query-string

O estagiário acabou de publicar uma nova rota na API da rede social para buscar posts, mas, desatento pelo ambiente de desenvolvimento, esqueceu-se de receber um limite para a quantidade de posts. 😨

Assim que foi colocada em produção, o servidor começou a cair constantemente pela alta carga de dados! Agora todas as requisições estão dando 504! 🆘

Modifique o arquivo `src/app.js` para que a rota `GET /posts` receba, via *query string:*

- Um atributo `limit` com valor numérico representando o tamanho máximo da lista de posts a ser entregue na resposta da requisição. Use **[slice](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)** para limitar o tamanho da array de posts a ser devolvida .

## Comandos salvadores

Para rodar os comandos abaixo, abra um terminal nesta pasta. Você pode fazer isso direto pelo VSCode com `Ctrl + J`.


Subir esse servidor:

```bash
hub run start
```

Rodar os testes:
```bash
hub run test
```

Entegrar:
```bash
hub entregar
```