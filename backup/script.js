// Dados de exemplo para listas
const listas = [
    {
      id: 1,
      titulo: "Lista 1",
      itens: [
        { nome: "Produto A", valor: 10.5 },
        { nome: "Produto B", valor: 20.3 },
        { nome: "Produto C", valor: 5.99 }
      ]
    },
    {
      id: 2,
      titulo: "Lista 2",
      itens: [
        { nome: "Produto A", valor: 11.0 },
        { nome: "Produto B", valor: 18.9 },
        { nome: "Produto D", valor: 8.5 }
      ]
    }
  ];
  
  // Dados de exemplo para imagens
  const imagens = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF/808080',
    'https://via.placeholder.com/150/FF0000/FFFFFF',
    'https://via.placeholder.com/150/FFFF00/000000'
  ];
  
  // Preencher os dropdowns com as listas
  function preencherListas() {
    const lista1Select = document.getElementById("lista1");
    const lista2Select = document.getElementById("lista2");
  
    listas.forEach(lista => {
      const option1 = document.createElement("option");
      option1.value = lista.id;
      option1.textContent = lista.titulo;
      lista1Select.appendChild(option1);
  
      const option2 = document.createElement("option");
      option2.value = lista.id;
      option2.textContent = lista.titulo;
      lista2Select.appendChild(option2);
    });
  }
  
  // Comparar as duas listas
  function compararListas() {
    const lista1Id = document.getElementById("lista1").value;
    const lista2Id = document.getElementById("lista2").value;
  
    const lista1 = listas.find(lista => lista.id == lista1Id);
    const lista2 = listas.find(lista => lista.id == lista2Id);
  
    const comparacaoDiv = document.getElementById("comparacao");
  
    if (lista1 && lista2) {
      let html = '<h3>Comparação de Preços:</h3><table><tr><th>Produto</th><th>' + lista1.titulo + '</th><th>' + lista2.titulo + '</th></tr>';
      
      const produtos = new Set();
      lista1.itens.forEach(item => produtos.add(item.nome));
      lista2.itens.forEach(item => produtos.add(item.nome));
      
      produtos.forEach(produto => {
        const itemLista1 = lista1.itens.find(item => item.nome === produto) || { nome: produto, valor: 0 };
        const itemLista2 = lista2.itens.find(item => item.nome === produto) || { nome: produto, valor: 0 };
        html += `<tr><td>${produto}</td><td>R$ ${itemLista1.valor.toFixed(2)}</td><td>R$ ${itemLista2.valor.toFixed(2)}</td></tr>`;
      });
  
      html += '</table>';
      comparacaoDiv.innerHTML = html;
    } else {
      comparacaoDiv.innerHTML = '<p>Selecione duas listas para comparar.</p>';
    }
  }
  
  // Criar a galeria de imagens
  function criarGaleria() {
    const galleryContainer = document.querySelector('.gallery-container');
    imagens.forEach(imagem => {
      const imgElement = document.createElement('img');
      imgElement.src = imagem;
      imgElement.alt = 'Imagem de exemplo';
      galleryContainer.appendChild(imgElement);
    });
  }
  
  // Event listeners
  document.getElementById("lista1").addEventListener("change", compararListas);
  document.getElementById("lista2").addEventListener("change", compararListas);
  
  // Inicializar
  preencherListas();
  criarGaleria();
  