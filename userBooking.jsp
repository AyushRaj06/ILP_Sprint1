<html>
<head>
    <title>Parcel Booking</title>
</head>
<body>
    <h2>Parcel Booking Form</h2>
    <form action="BookingServlet" method="post">
        <h3>Sender Information:</h3>
        Name: <input type="text" name="senderName" readonly value="John Doe"><br>
        Address: <input type="text" name="senderAddress" readonly value="123 Street, NY"><br>
        Contact: <input type="text" name="senderContact" readonly value="9876543210"><br>

        <h3>Receiver Information:</h3>
        Name: <input type="text" name="receiverName" required><br>
        Address: <input type="text" name="receiverAddress" required><br>
        Pin Code: <input type="text" name="receiverPin" required><br>
        Contact: <input type="text" name="receiverContact" required><br>

        <h3>Parcel Details:</h3>
        Size & Weight: <input type="text" name="parcelDetails" required><br>
        Contents: <input type="text" name="contents" required><br>

        <h3>Shipping Options:</h3>
        <select name="shippingOption">
            <option value="Standard">Standard</option>
            <option value="Express">Express</option>
        </select><br>

        <h3>Date & Time Selection:</h3>
        <input type="datetime-local" name="dateTime" required><br>

        <h3>Service Cost & Payment:</h3>
        Cost: <input type="text" name="serviceCost" readonly value="$10"><br>
        Payment: 
        <select name="paymentMethod">
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
        </select><br>

        <h3>Additional Services:</h3>
        <input type="checkbox" name="additionalServices" value="Insurance"> Insurance
        <input type="checkbox" name="additionalServices" value="Tracking"> Tracking<br>

        <input type="submit" value="Book Service">
    </form>
</body>
</html>
