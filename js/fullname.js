console.log("employees",employees)
var getfullName=function(employee)
{
    return employee.firstName
    + " " + employee.lastName 
    
}


var fullName=employees.map(getfullName)

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getfullName)