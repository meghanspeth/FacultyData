console.log("employees", employees)
var getLastName=function(employee)
    {
        return employee.lastName
    }

    d3.select("body")
    .append("ol")
    .selectAll("ol")
    .data(employees)
    .enter()
    .append("li")
    .text(getLastName)
    .append("ol")
