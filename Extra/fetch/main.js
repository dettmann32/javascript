fetch('http://localhost:3000/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
   
  })
  .catch(error => {
    console.error('Erro:', error);
  });

function name(){
  let a = window.document.getElementById(teste)
  a.innerText =   'alguma coisa'}