/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {


while (students.length > 0)
{
    if (students[0] == sandwiches[0])
    {
        students.splice(0,1)
        sandwiches.splice(0,1)
    }
    else 
    {
        students.push(students[0])
        students.splice(0,1)
    }
}
console.log("sandwiches : " + sandwiches);
console.log("students : "+students);
return students.length
};

students = [1,1,1,0,0,1]
sandwiches = [1,0,0,0,1,1]



console.log(countStudents(students,sandwiches))


/**
Solution : 


var countStudents = function(students, sandwiches) {
    const count = [0, 0];
    students.forEach(student => count[student]++);
    
    for (let i = 0; i < sandwiches.length; ++i) {
        if (count[sandwiches[i]] === 0)
            return sandwiches.length - i;
        count[sandwiches[i]]--;
    }
    
    return 0;
};

solution 2 : 



var countStudents = function(students, sandwiches) {
    const queue = students.slice();
    for (const sandwich of sandwiches) {
        const index = queue.indexOf(sandwich);
        if (index !== -1) {
            queue.splice(0, index + 1);
        } else {
            break;
        }
    }
    return queue.length;
};













 */