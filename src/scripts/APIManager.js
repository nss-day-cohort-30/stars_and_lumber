const APIManager = {
    getEmployees: () => {
        return fetch("http://localhost:8088/employees?_expand=computer&_expand=department")
            .then(res => res.json())
    },
    getComputers: () => {
        return fetch("http://localhost:8088/computers")
            .then(res => res.json())

    },
    getDepartments: () => {
        return fetch("http://localhost:8088/departments")
            .then(res => res.json())

    }
}

export default APIManager