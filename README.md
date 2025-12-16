# Instagram – Remover Posts Salvos (Script JS)

Este repositório contém um script JavaScript para **remover automaticamente posts salvos no Instagram**, executando diretamente no console do navegador.

** Atenção **
- O script NÃO é uma extensão
- Ele deve ser executado manualmente no navegador
- Use por sua conta e risco

## Como usar

1. Abra o **Instagram no navegador**
2. Vá até a área de **Posts Salvos**
3. Abra **qualquer post salvo**
4. Pressione:

   - **Windows / Linux:** `Ctrl + Shift + J`
   - **Mac:** `Cmd + Option + J`

5. Cole todo o conteúdo do arquivo:
   *remover-salvos-instagram.js*

6. Pressione **Enter**
7. O script começará a remover os posts automaticamente


## O que o script faz

- Detecta o botão de remover usando o SVG do Instagram
- Clica automaticamente no botão
- Avança para o próximo post
- Exibe logs no console com o progresso

## Configurações ajustáveis

No início do código você pode alterar:

```js
const Remover_MS = 20
const Proximo_MS = 20
const Max_Espera_MS = 3000


