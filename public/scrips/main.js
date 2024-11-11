function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  function generateRandomSentences() {
    const sentences = [
      "Completa la oración en náhuatl (selección múltiple)",
      "Completa la oración en náhuatl (entrada de texto)",
      "Completa el dialogo en náhuatl (Selección múltiple)",
      "Traduce la oración (Español -> Náhuatl)",
      "Traduce la oración (Náhuatl -> Español)",
      "Completa la traducción (selección múltiple)",
      "Completa la traducción (entrada de texto)",
      "Toca los pares (Español - Náhuatl)",
      "Traduce el verbo (Español -> Náhuatl)",
      "Traduce el verbo (Náhuatl -> Español)",
      "¿Qué ves? (selección múltiple)",
      "¿Qué ves? (entrada de texto)",
      "Escoge los pares (imagen palabra)"
    ];
  
    const randomSentences = [];
  
    while (randomSentences.length < 10) {
      const randomIndex = getRandomNumber(sentences.length);
      const randomSentence = sentences[randomIndex];
  
      if (!randomSentences.includes(randomSentence)) {
        randomSentences.push(randomSentence);
      }
    }
  
    return randomSentences;
  }
  
  function displayRandomSentences() {
    const sentences = generateRandomSentences();
  
    const list = document.createElement("ol");
  
    sentences.forEach((sentence) => {
      const listItem = document.createElement("li");
      const text = document.createTextNode(sentence);
  
      listItem.appendChild(text);
      list.appendChild(listItem);
    });
  
    const container = document.getElementById("sentences-container");
    container.appendChild(list);
  }
  
  document.getElementById("generate-button").addEventListener("click", () => {
    window.location.href = "set.html";
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("set-page")) {
      displayRandomSentences();
    }
  });
  