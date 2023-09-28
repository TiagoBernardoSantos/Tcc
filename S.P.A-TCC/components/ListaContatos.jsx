import React from "react"
import Contatos from "./contatos"

export default function ListaContatos(ListaContatos){
    return(
        <>
        <ul>{ListaContatos.map(contatos => {
          return  <li>{contatos.nome + "" +contatos.phone}</li>
        })}

        </ul>
            
        </>
    )
}