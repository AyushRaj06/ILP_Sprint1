const users = [
    {
        customerName: "Admin User Sharma",
        email: "admin.sharma@example.com",
        countryCode: "+91",
        mobil: "9234670605",
        address: "Admin Office, Delhi",
        userId: "admin_sharma",
        password: "adminPassword#27",
        preferences: {
          theme: "dark",
          notifications: true,
          accessLevel: "full",
          language: "hi"
        },
        isAdmin: true
      },
      {
        customerName: "Ayush Patel",
        email: "ayush.patel@example.com",
        countryCode: "+91",
        mobil: "785909199",
        address: "Apartment 2B, Mumbai",
        userId: "ayush_patel123",
        password: "userPassword#14",
        preferences: {
          theme: "light",
          notifications: false,
          language: "en",
          interests: [
            "cooking",
            "music"
          ]
        },
        isAdmin: false
      }
];

var currentUser;

function addUser(user) {
    if (typeof user === 'object' && user !== null) {
        users.push(user);
    }
    // console.log("User added:", user);
}

function findUser(email, password) {
    currentUser = users.find(user => user.email === email);
    return users.find(user => user.email === email && user.password === password);
}

function isUserAdmin(email) {
    users.find(user => user.email === email)
    return users.find(user => user.email === email && user.password === password).isAdmin;
}

//not working
// document.addEventListener("DOMContentLoaded", function() {
//     const userName = currentUser.customerName;
//     if (userName) {
//         document.getElementById("welcomeMessage").textContent = "Welcome " + userName;
//     }
// });

export { addUser, findUser, isUserAdmin };