import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { array } from "prop-types"

const FiltriProdotto = ({ categorie, alberaturaCategoria, setAlberaturaCategoria, setCategoriaPrincipale }) => {



    const [ids, setIds] = React.useState()


    function clickCategoria(categoriaPrincipale, categoriaIntermedia, categoria, id) {
        setAlberaturaCategoria({
            ...alberaturaCategoria,
            corrente: categoria.name,
            categoriaIntermedia: categoriaIntermedia,
            categoriaPrincipale: categoriaPrincipale,
            idCorrente: id
        })

        setIds(id)
    }

    return (
        <div className="filtri-prodotto">
            {categorie.map((categoria) => {

                return (
                    <div key={categoria.id} >
                        {(categoria.id === 13 ) &&
                            <>
                                <h3>{categoria.name}</h3>
                                <ul>
                                    {categoria.childs ?  categoria.childs.map((catIntermedia) => {
                                        return (
                                            <li key={catIntermedia.id}>
                                                {catIntermedia.name}
                                                <ul> 
                                                    {catIntermedia ? catIntermedia.childs.map((item) => {
                                                        return <li key={item.id} onClick={() => clickCategoria(
                                                            categoria.id, 
                                                            catIntermedia.id,
                                                            item, 
                                                            item.id,)}>
                                                                {item.name}</li>
                                                    }) : null
                                                    }
                                                </ul>
                                            </li>

                                        )
                                    }) : null}
                                </ul>
                            </>
                        }
                    </div>
                )

            })}
        </div>
    )
}


export default FiltriProdotto
