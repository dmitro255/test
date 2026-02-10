fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('fruit-list');

    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} — ${item.price} руб.`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Ошибка загрузки JSON:', error);
  });
