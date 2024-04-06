"use server"
import { redirect } from "next/navigation";
import { db } from "~/server/db";
import { validateRequest } from "~/server/validateRequest";
import "./giglo.css"

export default async function VisualizzaPrenotazioni(){

    const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
	}

    const prenotazioni=await db.prenotazioni.findMany({
        where:{idAutista:user.idAutista as number}
    })

    return(
        <>
            <h1 className="sesso">Visualizza prenotazioni</h1>
            <table>
                <tbody>
                    <tr>
                        <th>IDAutista</th>
                        <th>IDViaggio</th>
                        <th>IDPasseggero</th>
                        <th>Azioni</th>
                    </tr>
                        {
                            prenotazioni.map((prenotazione,k)=>(
                                <tr key={k}>
                                    <td>
                                        <p>
                                            {prenotazione.idAutista}
                                        </p>
                                        
                                    </td>
                                    <td>
                                        <p>
                                            {prenotazione.idViaggio}
                                        </p>
                                        
                                    </td>
                                    <td>
                                        <p>
                                            {prenotazione.idPasseggero}
                                        </p>
                                       
                                    </td>
                                    <td>
                                        <button>
                                            Rifiuta
                                        </button>
                                        <button>
                                            Accetta
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    ) 
}
