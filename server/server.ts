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

    if (reqUrl === '/api' && req.method === 'GET') {
        res.writeHead(error ? 500 : 200, {
            "Content-Type" : 'application/json',
        })
        res.end(JSON.stringify(error ? {error: error.message} : {ok: true, todos: data}))

        
    }

    if (reqUrl === "/api/todos" && req.method === 'GET') {
        res.writeHead(error ? 500 : 200, {
            "Content-Type" : 'application/json',
        })
        res.end(JSON.stringify(error ? {error: error.message} : {ok: true, todos: data}))
    }
})

server.listen(PORT, () => console.log(`server running on ${PORT}`))
