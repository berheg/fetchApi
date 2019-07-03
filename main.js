function loadAnswer() {
    fetch("https://yesno.wtf/api")
      .then(resp => resp.json())
      .then(json => {
        console.log(json);
        // code here
        const img = document.getElementById("ans-img");
        const h1 = document.getElementById("ans-title");
  
        h1.textContent = json.answer;
        // img.setAttribute("src", json.image);
        img.src = json.image;
      });
  }
  
  loadAnswer();
  document.getElementById("reload").addEventListener("click", loadAnswer);
  