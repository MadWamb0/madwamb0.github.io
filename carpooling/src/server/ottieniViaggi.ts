"use server"
import { db } from "./db";

export async function ottieniViaggi(){
    const viaggi=await db.viaggio.findMany()
    return viaggi;
}