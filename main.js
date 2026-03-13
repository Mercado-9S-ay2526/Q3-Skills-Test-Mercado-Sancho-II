function calculateAndRegister() {
    const TICKET_PRICE = 250.00;
    const ADMIN_FEE = 50.00;


    let ticketQTY = Number(document.getElementById("ticketQTY").value) || 0;

    let subtotal = ticketQTY * TICKET_PRICE;
    let totalPrice = subtotal + ADMIN_FEE;

    document.getElementById("subtotal").value = "Php " + subtotal.toFixed(2);
    document.getElementById("total").value = "Php " + totalPrice.toFixed(2);

    alert("Registration successful!\nTickets: " + ticketQTY + "\nTotal: Php " + totalPrice.toFixed(2));
}
