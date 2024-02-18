import mongoose,{connection, connect} from "mongoose";
import "dotenv/config"


export class ConectionDb{
    static async start (){
        try {

            connection.on("connected",()=>console.log("connected success!"))
            connection.on("open",()=>console.log("opened success!"))
            connection.on("close",()=>console.log("closed success!"))
            await connect(process.env.MONGO as string, {
                serverApi:{
                    version:"1",
                    strict:true,
                    deprecationErrors:true
                },
                serverSelectionTimeoutMS:5000,

                dbName:"Arnia3"
            })
            
        } catch (error) {
            console.log('ErrorConetion' + error)
        }

    }

}