// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');
//     // You can call and await an async method here
//     return {
//         body: "Hello, world!"
//     };
// }

exports.cipa = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if(req.query.name || (req.body && req.body.name)){
        context.res.json("Hello " + (req.query.name || req.body.name));
        // context.res = {
        //     body: "Hello " + (req.query.name || req.body.name)
        // }
    }
    else{
        context.res = {
            status: 400,
            body: "Please pass a name on the query sstring or in the request body"
        }
    }
}