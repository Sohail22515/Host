const apiUrl = 'http://localhost:5001/items'; // Backend API URL

const addItemForm = document.getElementById('addItemForm');
const itemsList = document.getElementById('itemsList');

addItemForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;

  const newItem = { name, description };
  await fetch(apiUrl + '/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newItem),
  });

  loadItems();
});

const loadItems = async () => {
  const response = await fetch(apiUrl);
  const items = await response.json();
  itemsList.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name}: ${item.description}`;
    itemsList.appendChild(li);
  });
};

loadItems();
