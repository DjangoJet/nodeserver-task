require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c7efbf8c65cb447d57ef98b').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndUpdate = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndUpdate('5c7efb424e8245477e2f1cb9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})