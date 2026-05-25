const billingTable = document.getElementById('billing-table');

const addRowButton = document.getElementById("add-row");

addRowButton.addEventListener("click", function() {

const newRow = document.createElement("tr");

// B. Define the internal cell structure using your exact HTML design template
newRow.innerHTML = `
    <td>
        <input type="file" name="image-upload" accept="image/*" />
    </td>
    <td>Category Placeholder</td>
    <td>Price Placeholder</td>
`;
billingTable.appendChild(newRow);
})