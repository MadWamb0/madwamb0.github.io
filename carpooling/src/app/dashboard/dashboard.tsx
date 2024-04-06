

import { User } from "@prisma/client"

import { ottieniViaggi } from "~/server/ottieniViaggi"
interface userType{
    user:User
}


export default function Dashboard({user}:userType){
    //look
    
    return(
        <div>
            <h1>
                {user.nome}
                {user.cognome}
                {user.numero}
                {user.idcard?"passeggero":"autista"}
                
            </h1>
        </div>
    )
}