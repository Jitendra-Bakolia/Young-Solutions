export const sendTemplate = async (rows) => {
    try {
        let itemTable = `<table class="email-table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price/Item</th>
                                <th>Other Info</th>
                            </tr>
                        </thead>
                        <tbody>`

        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];

            itemTable += `<tr>
                <td>${element.item}</td>
                <td>${element.quantity}</td>
                <td>${element.price}</td>
                <td>${element.other}</td>
            </tr>`

        }

        itemTable += `     </tbody>
                    </table>`


        return itemTable;
    } catch (error) {
        toasty.error("Something Went Wrong!");
    }
};
