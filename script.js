document.getElementById('shoppingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const category = document.querySelector('input[name="category"]:checked').value;
    const price = document.getElementById('price').value;

    const table = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = productName;
    cell2.textContent = quantity;
    cell3.textContent = category;
    cell4.textContent = price;

    // Reset the form
    document.getElementById('shoppingForm').reset();
});
