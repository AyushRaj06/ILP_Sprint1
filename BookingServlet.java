// BookingServlet.java
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/BookingServlet")
public class BookingServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final ArrayList<String> userBookings = new ArrayList<>();
    private static final ArrayList<String> officerBookings = new ArrayList<>();
    
    // Simulating a userId stored as long
    private static final long userId = 123456789L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Fetching data from the form
        String senderName = request.getParameter("senderName");
        String senderAddress = request.getParameter("senderAddress");
        String senderContact = request.getParameter("senderContact");
        String receiverName = request.getParameter("receiverName");
        String receiverAddress = request.getParameter("receiverAddress");
        String receiverPin = request.getParameter("receiverPin");
        String receiverContact = request.getParameter("receiverContact");
        String parcelDetails = request.getParameter("parcelDetails");
        String shippingOption = request.getParameter("shippingOption");
        String dateTime = request.getParameter("dateTime");
        String serviceCost = request.getParameter("serviceCost");
        String paymentMethod = request.getParameter("paymentMethod");
        String additionalServices = request.getParameter("additionalServices");
        
        // Store details in Booking Lists
        String bookingData = "UserID: " + userId + ", Sender: " + senderName + ", Receiver: " + receiverName + ", Parcel: " + parcelDetails +
                            ", Shipping: " + shippingOption + ", Date/Time: " + dateTime + ", Cost: " + serviceCost + ", Payment: " + paymentMethod + ", Services: " + additionalServices;
        
        // Determine if the request is from userBooking or officerBooking
        String source = request.getHeader("Referer");
        if (source != null && source.contains("officerBooking.jsp")) {
            officerBookings.add(bookingData);
        } else {
            userBookings.add(bookingData);
        }

        // Response
        out.println("<html><body>");
        out.println("<h2>Booking Successful!</h2>");
        out.println("<p>" + bookingData + "</p>");
        out.println("<a href='index.jsp'>Go Back</a>");
        out.println("</body></html>");
    }
}
