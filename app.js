// Part 1 : Basic Array
//Define a type alias named product to represent a product with the following
//properties:
//name (string): The name of the product.
//price (number):The price of the product.
//inventory (object): An object containing inventory details including:
//stock (number): The number of products available.
//colorOptions (string[]): An array listing available colors.
//2.Create an array named products containing at least three product objects.
//Each. product object should include a name,price and inventory details.
//3.Implement a function named changeColor that takes a product object and a new 
//color as input. This function should update the color property of the product and 
//adjust the price based on the new color (implement your own logic, e.g. , increase by
//10% for red, decrease by 5% for blue).
//4.Display each product's name,price,stock, and available colors. Iterate through the 
//products array and print each product's details.
var Employee = [{
        name: "sara",
        hoursWorked: 22,
        hourlyRate: 30,
        salary: 0,
    },
    {
        name: "ali",
        hoursWorked: 23,
        hourlyRate: 60,
        salary: 0,
    },
    {
        name: "akram",
        hoursWorked: 18,
        hourlyRate: 80,
        salary: 0,
    },
];
function calculateSalary(employee) {
    employee.forEach(function (employee) {
        employee.salary = employee.hoursWorked * employee.hourlyRate;
        if (employee.hoursWorked >= 20) {
            employee.salary *= 1.20;
            console.log("bonousgiven");
        }
    });
}
calculateSalary(Employee);
console.log(Employee);
Employee.forEach(function (Employee) { return (console.log("Employee:".concat(Employee.name, ",Salary:").concat(Employee.salary))); });
