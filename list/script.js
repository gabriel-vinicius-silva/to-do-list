function adicionarItem() {
    let input = document.getElementById('novoitems');
    let itemText = input.value.trim();

    if (itemText) {
        let list = document.getElementById('to-do-list');
        let listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
        input.value = '';
    } else {
        alert('Digite algo antes de adicionar à lista.');
    }
}
