function Register() {
    const TICKET_PRICE = 250.00;
    const ADMIN_FEE = 50.00;
    let ticketQTY = Number(document.getElementById("ticket").value);
    let subtotal =  ticketQTY * TICKET_PRICE;
    let totalPrice = Number(subtotal) + ADMIN_FEE;

    document.getElementById("result").innerHTML = "Total Price: $" + totalPrice.toFixed(2);
}
