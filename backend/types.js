const zod = require("zod");

const createTask = zod.object({
    tasks : zod.string(),
    description : zod.string()
})

const updateTask = zod.object({
    id : zod.string()
})


module.exports = {
    createTask : createTask,
    updateTask : updateTask
}
