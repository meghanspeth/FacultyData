console.log("employees", employees)
var getPhoto=function(employee)
    {
        return employee.photo
    }

    d3.select("body")
    .append("div")
    .selectAll("img")
    .data(employees)
    .enter()
    .append("img")
    .attr("src",getPhoto)
    .text(function(employee)
    {return employee.photo})
    
