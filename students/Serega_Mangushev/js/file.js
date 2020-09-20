//const products = document.querySelector('.shop__list');
export function getSumObj(object, expression) {
    return eval(expression.replace(/[a-z]+/gi, (key) => object[key]));
  }
  
  export const root =
    "https://raw.githubusercontent.com/Binatik/js-08-24/master/students/Serega_Mangushev/backend/Server";
  
  /**
   *
   * @param {`*`} request
   * @param {*} root
   * @param {*} url
   * @returns xhr.responseText
   */
  export function promisifiedXHR(request, root, url) {  
    const xhr = new XMLHttpRequest(); //API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером.
    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function () {
        //Проверяем, что операция полностью завершена.
  
        if (xhr.readyState === 4) resolve(JSON.parse(xhr.responseText)); 
        if (xhr.readyState === 404) reject(JSON.parse(xhr.responseText));
  
        //Если это так, вернем resolve с нужным значением. В нашем случае это xhr.responseText
      };
  
      xhr.open(request, `${root + url}`, true);
  
      xhr.send();
    });
  } 