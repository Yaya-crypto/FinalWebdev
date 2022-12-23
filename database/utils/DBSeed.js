

const { Employee, Task } = require('../models');

const seedDB = async () => {
    const dummyEmployee = await Employee.create({
        firstname: "Yaya",
        lastname: "Ahmed",
        department: "Computer Science"
    });

    const dummyEmployee2 = await Employee.create({
        firstname: "Jack",
        lastname: "Frost"
    });

    const dummyTask = await Task.create({
        description: "Wake Up",
        priorityLevel: 5,
        completionStatus: false
    });

    const dummyTask2 = await Task.create({
        description: "Go to sleep",
        priorityLevel: 5,
        completionStatus: false
    });

    await dummyTask.setEmployee(dummyEmployee);
    await dummyTask2.setEmployee(dummyEmployee2);
}

module.exports = seedDB;