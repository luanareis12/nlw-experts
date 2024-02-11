const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "echo()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes é um tipo de dado em JavaScript?",
      respostas: [
        "string",
        "number",
        "both",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Verifica se dois valores são iguais, incluindo o tipo.",
        "Verifica se dois valores são iguais, mas ignora o tipo.",
        "Atribui um valor a uma variável.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de incremento em JavaScript?",
      respostas: [
        "++",
        "--",
        "+=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseInteger()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
      respostas: [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '10' + 2 em JavaScript?",
      respostas: [
        "12",
        "102",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Ele retorna o tipo de uma variável.",
        "Ele compara dois valores.",
        "Ele verifica se um valor é nulo.",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')//o '#! procura pela tag 'id' dentro do html
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)//CloneNode é uma função que vai clonar o nó(ou cada uma das tags criadas no arquivo do html)
    quizItem.querySelector('h3').textContent = item.pergunta//Modifica o h3
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))//A função indexOf pesquisa o índice 
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        //alert(corretas.size)
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
        
      quizItem.querySelector('dl').appendChild(dt)    
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //Coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }//as chaves também são chamadas de escopo