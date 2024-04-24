// Загрузка XML файла
function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } else { // Для старых версий Internet Explorer (IE5 и IE6)
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
  }
  
  // Парсинг XML и создание карточек товаров
  function createProductCards() {
    var xmlDoc = loadXMLDoc("products.xml");
    var sections = xmlDoc.getElementsByTagName("section");
    var productCardsContainer = document.getElementById("product-cards");
  
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var productCard = document.createElement("div");
      productCard.className = section.getAttribute("class");
  
      var h1 = document.createElement("h1");
      h1.innerText = section.getElementsByTagName("h1")[0].textContent;
      productCard.appendChild(h1);
  
      var productItems = section.getElementsByClassName("product-item");
      var productList = document.createElement("div");
      productList.className = "product-list";
  
      for (var j = 0; j < productItems.length; j++) {
        var productItem = productItems[j];
  
        var img = document.createElement("img");
        img.src = productItem.getElementsByTagName("img")[0].getAttribute("src");
        img.alt = productItem.getElementsByTagName("img")[0].getAttribute("alt");
  
        var h2 = document.createElement("h2");
        h2.innerText = productItem.getElementsByTagName("h2")[0].textContent;
  
        var p = document.createElement("p");
        p.innerText = productItem.getElementsByTagName("p")[0].textContent;
  
        var button = document.createElement("button");
        button.className = "buy-button";
        button.innerText = productItem.getElementsByTagName("button")[0].textContent;
  
        var productItemWrapper = document.createElement("div");
        productItemWrapper.className = "product-item";
        productItemWrapper.appendChild(img);
        productItemWrapper.appendChild(h2);
        productItemWrapper.appendChild(p);
        productItemWrapper.appendChild(button);
  
        productList.appendChild(productItemWrapper);
      }
  
      productCard.appendChild(productList);
      productCardsContainer.appendChild(productCard);
    }
  }
  
  // Вызов функции при загрузке страницы
  window.onload = function(){
    createProductCards();
  };