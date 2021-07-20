
    
const shell = require('shelljs')


module.exports = (app) => {

    app.get('/start',async (req, res)=>{
    

        try {
     

            shell.exec('./start.sh')

                //QmdSbx8C2zAQm6N3cSUoQdF7AhHaBE6eVHA4UrbUvF1mjD
     
        }
        catch(error) {
            console.log(error);
            res.send("");
        }
       //res.send(req.file.filename);
    });

   
}