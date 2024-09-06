function pesquisar() {
  /**
   * Função para pesquisar dados em um conjunto e exibir os resultados.
   * 
   * @param {string} termoPesquisa - O termo a ser pesquisado.
   * @param {array} dados - O conjunto de dados a ser pesquisado.
   * @param {string} elementoResultados - O ID do elemento HTML onde os resultados serão exibidos.
   */
  const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultadosDiv = document.getElementById("resultados-pesquisa");

  // Limpa a seção de resultados antes de exibir novos resultados
  resultadosDiv.innerHTML = "";

  // Verifica se o termo de pesquisa está vazio
  if (!termoPesquisa) {
    resultadosDiv.textContent = "Campo de pesquisa vazio. Por favor, insira um termo.";
    return;
  }

  // Itera sobre os dados e exibe os resultados correspondentes
  dados.forEach(dado => {
    const titulo = dado.titulo.toLowerCase();
    const descricao = dado.descricao.toLowerCase();

    if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa)) {
      // Cria um elemento div para cada resultado
      const resultadoDiv = document.createElement('div');
      resultadoDiv.classList.add('item-resultado');

      // Cria o título do resultado
      const tituloElemento = document.createElement('h2');
      tituloElemento.textContent = dado.titulo;

      // Cria um parágrafo para a descrição
      const descricaoP = document.createElement('p');
      descricaoP.textContent = dado.descricao;

      // Cria um parágrafo para o valor
      const valorP = document.createElement('p');
      valorP.textContent = `Valor: R$ ${dado.valor}`;

      // Adiciona os elementos ao div do resultado
      resultadoDiv.appendChild(tituloElemento);
      resultadoDiv.appendChild(descricaoP);
      resultadoDiv.appendChild(valorP);

      // Adiciona o resultado à seção principal
      resultadosDiv.appendChild(resultadoDiv);
    }
  });

  // Verifica se nenhum resultado foi encontrado
  if (resultadosDiv.children.length === 0) {
    resultadosDiv.textContent = "Nenhum resultado encontrado.";
  }
}