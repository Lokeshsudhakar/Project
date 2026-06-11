 // arrays: grouping of similar objects in cotainer

        let names = ["ravi", "mahi", "nag"];

        // indexing starts with 0
        console.log(names[1]);

        console.log(names);

        // updating array values;

        names[1] = "sadik";
        console.log(names);

        // array length

        console.log(names.length);

        // array methods

        // push: adding vakue at the array end

        names.push("mahesh");
        console.log(names);

        // pop: removing last element in an array

        names.pop();
        console.log(names);

        // unshift: adding a new value at the start of an array

        names.unshift("tej");
        console.log(names);

        // shift: removing the first element in an array

        names.shift();
        console.log(names);

        // looping through array

        for(let i =0; i< names.length; i++){
            console.log(names[i]);
        }

        // includes: checking whether the element is present or not

       console.log(names.includes("nag"));
       
    //    indexOf: to check at which index is our value

    console.log(names.indexOf("ravi"));

    const employees = [
        {id: 1, name: "og", salary: 25000},
        {id: 2, name: "peddi", salary: 35000},
        {id: 3, name: "pushpa", salary: 45000}

    ]

    let namesX = employees.map(employee => employee.name);

    console.log(namesX);

    // filter: keep onnly matching items

const result = employees.filter(employee => employee.salary > 30000);

console.log(result);

// find: returns the desired element


const emploeeX = employees.find(employee => employee.id === 2);

console.log(emploeeX);

// reduce: combine everythhing into a single value

const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);

console.log(totalSalary);








// TASK ON ARRAYS

const movies = [
  { id: 1, title: "Bahubali", rating: 9 },
  { id: 2, title: "Pushpa", rating: 8 },
  { id: 3, title: "RRR", rating: 10 },
  { id: 4, title: "Salaar", rating: 7 }
];

const movieTitles = movies.map(movie => movie.title);

const movieids=movies.map(movie=>movie.id);

const movieRatings = movies.map(movie => movie.rating);

const increasedRatings = movies.map(movie => movie.rating + 1);

const highRatedMovies = movies.filter(movie => movie.rating > 8);

const idlessthan4=movies.filter(movie=>movie.id<4);

const lowRatedMovies = movies.filter(movie => movie.rating < 9);

const movieWithId3 = movies.find(movie => movie.id === 3);

const pushpaMovie = movies.find(movie => movie.title === "Pushpa");

const totalRatings = movies.reduce((sum, movie) => sum + movie.rating, 0);

console.log("Movie Titles:", movieTitles);
console.log("Movie IDs:", movieids);
console.log("Movie Ratings:", movieRatings);
console.log("Increased Ratings:", increasedRatings);
console.log("High Rated Movies:", highRatedMovies);
console.log("Low Rated Movies:", lowRatedMovies);
console.log("Movies with IDs less than 4:", idlessthan4);
console.log("Movie with ID 3:", movieWithId3);
console.log("Pushpa Movie:", pushpaMovie);
console.log("Total Ratings:", totalRatings);




const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 }
];

const productNames = products.map(product => product.name);

const productPrices = products.map(product => product.price);

const increasedPrices = products.map(product => product.price + 1000);

const productsAbove1000 = products.filter(product => product.price > 1000);

const productsBelow10000 = products.filter(product => product.price < 10000);

const productWithId2 = products.find(product => product.id === 2);

const monitorProduct = products.find(product => product.name === "Monitor");

const totalProductCost = products.reduce((sum, product) => sum + product.price, 0);


console.log("Product Names:", productNames);
console.log("Product Prices:", productPrices);
console.log("Increased Prices:", increasedPrices);
console.log("Products Above 1000:", productsAbove1000);
console.log("Products Below 10000:", productsBelow10000);
console.log("Product with ID 2:", productWithId2);
console.log("Monitor Product:", monitorProduct);
console.log("Total Product Cost:", totalProductCost);







const scores = [45, 80, 20, 100, 60];

const add10Runs = scores.map(score => score + 10);

const add5Runs = scores.map(score => score + 5);

const scoresAbove50 = scores.filter(score => score > 50);

const scoresAboveOrEqual80 = scores.filter(score => score >= 80);

const firstScoreAbove70 = scores.find(score => score > 70);

const firstScore100 = scores.find(score => score === 100);

const totalRuns = scores.reduce((sum, score) => sum + score, 0);

const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;


console.log("Scores after adding 10 runs:", add10Runs);
console.log("Scores after adding 5 runs:", add5Runs);
console.log("Scores above 50:", scoresAbove50);
console.log("Scores above or equal to 80:", scoresAboveOrEqual80);
console.log("First score above 70:", firstScoreAbove70);
console.log("First score of 100:", firstScore100);
console.log("Total runs:", totalRuns);
console.log("Average score:", averageScore);






const students = [
  { name: "Ravi", marks: 90 },
  { name: "Priya", marks: 75 },
  { name: "Rahul", marks: 40 },
  { name: "Anu", marks: 95 }
];

const studentNames = students.map(student => student.name);

const studentMarks = students.map(student => student.marks);

const addedMarks = students.map(student => student.marks + 5);

const topStudents = students.filter(student => student.marks > 80);

const failingStudents = students.filter(student => student.marks < 50);

const rahul = students.find(student => student.name === "Rahul");

const firstStudentAbove90 = students.find(student => student.marks > 90);

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);


console.log("Student Names:", studentNames);
console.log("Student Marks:", studentMarks);
console.log("Marks after adding 5:", addedMarks);
console.log("Top Students:", topStudents);
console.log("Failing Students:", failingStudents);
console.log("Rahul:", rahul);
console.log("First Student Above 90:", firstStudentAbove90);
console.log("Total Marks:", totalMarks);











const foodOrders = [
  { item: "Pizza", price: 300 },
  { item: "Burger", price: 150 },
  { item: "Biryani", price: 250 },
  { item: "Ice Cream", price: 100 }
];

const foodItems = foodOrders.map(order => order.item);

const foodPrices = foodOrders.map(order => order.price);

const increasedFoodPrices = foodOrders.map(order => order.price + 50);

const foodAbove200 = foodOrders.filter(order => order.price > 200);

const foodBelow250 = foodOrders.filter(order => order.price < 250);

const biryaniOrder = foodOrders.find(order => order.item === "Biryani");

const firstFoodAbove250 = foodOrders.find(order => order.price > 250);

const totalFoodBill = foodOrders.reduce((sum, order) => sum + order.price, 0);



console.log("Food Items:", foodItems);
console.log("Food Prices:", foodPrices);
console.log("Increased Food Prices:", increasedFoodPrices);
console.log("Food Items Above ₹200:", foodAbove200);
console.log("Food Items Below ₹250:", foodBelow250);
console.log("Biryani Order:", biryaniOrder);
console.log("First Food Item Above ₹250:", firstFoodAbove250);
console.log("Total Food Bill:", totalFoodBill);







const uppercase = movies.map(movie => movie.title.toUpperCase());

console.log("Uppercase Movie Titles:", uppercase);

const lowercase = movies.map(movie => movie.title.toLowerCase());

console.log("Lowercase Movie Titles:", lowercase);

const namestartswithR = students.filter(student => student.name.startsWith("R"));

console.log("Students whose names start with 'R':", namestartswithR);

const lengthgreaterthan5 = products.filter(product => product.name.length > 5);

console.log("Products with names longer than 5 characters:", lengthgreaterthan5);

const totalScores = scores.reduce((sum, score) => sum + score, 0);
const totalStudentMarks = students.reduce((sum, student) => sum + student.marks, 0);
const combinedTotal = totalScores + totalStudentMarks;

console.log("Combined Total:", combinedTotal);

const developers = [
  { id: 1, name: "Kishore", role: "Frontend", experience: 3 },
  { id: 2, name: "Rahul", role: "Backend", experience: 5 },
  { id: 3, name: "Arjun", role: "Fullstack", experience: 7 },
  { id: 4, name: "Kabir", role: "Frontend", experience: 2 }
];

const highExperienceDevs = Math.max(...developers.map(dev => dev.experience));

const devNames = developers.map(dev => dev.name);

const frontendDevs = developers.filter(dev => dev.role === "Frontend");

const arjun = developers.find(dev => dev.name === "Arjun");

const totalExperience = developers.reduce((sum, dev) => sum + dev.experience, 0);

const increasedExperience = developers.map(developer => developer.experience + 1);

console.log("Highest Experience:", highExperienceDevs);
console.log("Developer Names:", devNames);
console.log("Frontend Developers:", frontendDevs);
console.log("Arjun:", arjun);
console.log("Total Experience:", totalExperience);
console.log("Increased Experience:", increasedExperience);
