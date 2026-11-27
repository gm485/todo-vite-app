import http from 'node:http'
import {supabase} from "./supabaseClient.js"

const PORT = 8000



const server = http.createServer(async (req,res) => {
    //we need to know where the request is coming from
    const reqUrl = req?.url
    const {data, error} = await supabase
    .from('todos')
    .select("*")
    .limit(1)


    if (reqUrl === "/api/todos" && req.method === 'GET') {
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.end(JSON.stringify(error ? {error: error.message} : {ok: true, todos: data}))
    } else if (reqUrl === "/api/todos/priority" && req.method === "GET") {
        const {data, error} = await supabase
            .from('todos')
            .select('*')
            .eq('priority', 1);

        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.end(JSON.stringify(error ? {error: error.message} : {ok: true, todos: data}))
    }
    else {
        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({error: "not found", message: "the route does not exist"}))
    }
})

server.listen(PORT, () => console.log(`server running on ${PORT}`))
