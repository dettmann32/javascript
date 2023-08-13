fetch('http://localhost:3000/posts')  .then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // Isso converte a resposta em formato JSON
})
.then(data => {
  // Aqui você pode usar os dados recebidos
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});









