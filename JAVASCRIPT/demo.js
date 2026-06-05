
function marks_calculator(Name, marks1, marks2) 
{


     if (isNaN(marks1) || isNaN(marks2) || Name === "") {
        console.log("Please enter valid inputs for name and marks.");
        return;
    }



    console.log(`Results for ${Name}`);

    let totalmarks = marks1 + marks2;
    let avgmarks = totalmarks / 2;
    


    console.log(`Total Marks = ${totalmarks}`);
    console.log(`Average Marks = ${avgmarks}`);



    let totalWithBonus = totalmarks;
    totalWithBonus += 5; 
    
    console.log(`Total with Bonus Marks = ${totalWithBonus}`);


    if (marks1 > marks2)
    {
        console.log("Subject 1 has higher marks");
    } else if (marks2 > marks1) {
        console.log("Subject 2 has higher marks");
    } else {
        console.log("Both subjects have equal marks");
    }




    if (marks1 > 35 && marks2 > 35) 
    {
        console.log("both are passed");
    }
    else if(marks1 > 90 || marks2 > 90) 
    {
    console.log("one of the subjects is Outstanding");
    }





    let incMarks1 = marks1;
    incMarks1++;
    
    let decMarks2 = marks2;
    decMarks2--;
    
    console.log(`Subject 1 (+1) = ${incMarks1}`);
    console.log(`Subject 2 (-1) = ${decMarks2}`);





    if (avgmarks >= 35) 
    {
        console.log("Student has passed");
    }
    else 
    {
        console.log("Student has failed");
    }
    





    if (avgmarks >= 90) {
        console.log("A Grade");
    } else if (avgmarks >= 75) {
        console.log("B Grade");
    } else if (avgmarks >= 60) {
        console.log("C Grade");
    } else if (avgmarks >= 35) {
        console.log("D Grade");
    } else {
        console.log("Fail");
    }

}

marks_calculator("Lokesh", 8, 94);
