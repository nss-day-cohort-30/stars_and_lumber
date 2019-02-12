import APIManager from "./APIManager"
import createEmployee from "./createEmployee"
import printToDOM from "./printToDOM"

APIManager.getEmployees().then(
    (employees) => {
        employees.forEach(
            employee => {
                const employeeHTML = createEmployee(employee)
                printToDOM(employeeHTML, ".employeeList")
            }
        )
    }
)
