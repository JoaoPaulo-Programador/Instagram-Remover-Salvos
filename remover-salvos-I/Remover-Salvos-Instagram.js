;(async function () {
  const Remover_MS = 20
  const Proximo_MS = 20
  const Max_Espera_MS = 3000
  const Verificar_MS = 20

  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const clicar = (elemento) => {
    if (!elemento) throw new Error('Elemento nao encontrado')
    elemento.click()
  }

  const esperarBotaoRemover = async () => {
    const inicio = Date.now()

    while (Date.now() - inicio < Max_Espera_MS) {
      const svgs = document.querySelectorAll('svg')

      for (const svg of svgs) {
        const caminho = svg.querySelector(
          'path[d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"]'
        )

        if (caminho) {
          let botao = svg.parentElement

          for (let i = 0; i < 5; i++) {
            if (
              botao &&
              (botao.role === 'button' ||
                botao.onclick ||
                botao.getAttribute('tabindex') !== null)
            ) {
              return botao
            }
            botao = botao.parentElement
          }

          return svg.parentElement
        }
      }

      await esperar(Verificar_MS)
    }

    return null
  }

  const irProximo = async () => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39,
        bubbles: true
      })
    )
  }

  const removerSalvos = async () => {
    let total = 0
    const inicio = performance.now()

    console.log('Modo rapido ativado')

    while (true) {
      const botao = await esperarBotaoRemover()
      if (!botao) break

      clicar(botao)
      total++

      if (total % 25 === 0) {
        const tempo = ((performance.now() - inicio) / 1000).toFixed(1)
        console.log(total + ' posts removidos em ' + tempo + 's')
      }

      await esperar(Remover_MS)
      await irProximo()
      await esperar(Proximo_MS)
    }

    console.log('Finalizado. Total removido: ' + total)
  }

  console.log('Abra um post salvo antes de executar')
  await esperar(500)
  await removerSalvos()
})()
