// 1. Students Attendance
let students = ["Ravi", "Priya", "Kiran", "Anu"];
for (let i = 0; i < 4; i++) {
    console.log("Attendance marked for " + students[i]);
}

// 2. Products
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
for (let i = 0; i < 4; i++) {
    console.log("Available Product: " + products[i]);
}

// 3. Employees
let employees = ["John", "David", "Sara"];
for (let i = 0; i < 3; i++) {
    console.log("Welcome, " + employees[i]);
}

// 4. Seat Booking
for (let i = 0; i < 11; i++) {
    console.log("seat " + i + " booked");
}

// 5. Orders
let orders = ["Order101", "Order102", "Order103"];
for (let i = 0; i < 3; i++) {
    console.log("Delivering " + orders[i]);
}

// 6. Contacts
let contacts = ["Rahul", "Priya", "Arjun", "Neha"];
for (let i = 0; i < 4; i++) {
    console.log("Calling " + contacts[i]);
}

// 7. Users
let users = ["Ravi", "Kiran", "Anu"];
for (let i = 0; i < 3; i++) {
    console.log("Message sent to " + users[i]);
}

// 8. Videos
let videos = ["HTML Basics", "CSS Basics", "JavaScript Basics"];
for (let i = 0; i < 3; i++) {
    console.log("Now Playing video: " + videos[i]);
}

// 9. Bank Balance
let balance = 1000;
while (balance > 0) {
    console.log("Current balance: " + balance);
    balance -= 200;
}

// 10. Bus Stops
for (let i = 1; i < 6; i++) {
    console.log("Reached stop " + i);
}

// 11. Students Results (FIXED: Removed 'let' to avoid redeclaration error)
students = ["Ravi", "Priya", "Kiran", "Anu"]; 
for (let i = 0; i < students.length; i++) {
    console.log("Checking result for " + students[i]);
}
console.log("All results published successfully!");

// 12. Roll Numbers (FIXED: Removed 'break' so it processes all 20 students)
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Student " + i + " =  even roll number");
    } else {
        console.log("Student " + i + " =  odd roll number");
    }
}