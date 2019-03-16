const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     var isService = false
//     if (isService) {
//         res.status(503).send('Server is serviced')
//     } else {
//         next()
//     }
// })

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5c899b72707ed56f0b5c10bb')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5c899b61707ed56f0b5c10b9')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()