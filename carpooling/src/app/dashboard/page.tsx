import { redirect } from "next/navigation";
import { validateRequest } from "~/server/validateRequest";
import Dashboard from "./dashboard";
import Link from "next/link";

export default async function Page() {
	const { user } = await validateRequest();
	if (!user) {
		return redirect("/login");
	}
	return (
			<div>
				Benvenuto {user.nome} {user.cognome}. 
				<br/>
				Sei un {user.idcard?"passeggero":"autista"}
				<br/>
				La tua mail e' {user.email}
				<br/>
				<Link href="/dashboard/nuovoviaggio">
					Crea un nuovo viaggio
				</Link>
				<Link href="/dashboard/nuovoveicolo">
					Aggiungi un veicolo
				</Link>
				<Link href="/dashboard/visualizzaprenotazioni">
					Visualizza le prenotazioni
				</Link>
			</div>
			);

}