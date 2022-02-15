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
            categoriaPrincipale: categoriaPrincipale
        })

        setIds(id)
    }
    
    return (
        <div className="filtri-prodotto">
            {categorie.map((categoria) => {

                return (
                    <div key={categoria.id} >
                        <h3>{categoria.name}</h3>
                        <ul>
                            {categoria.childId.map((catIntermedia) => {
                                return (
                                    <li>
                                        {catIntermedia.name}
                                        <ul>
                                            {catIntermedia.childId.map((item) => {

                                                return <li onClick={() => clickCategoria(categoria.name, catIntermedia.name, item, item.id,)}>{item.name}</li>
                                            })
                                            }
                                        </ul>
                                    </li>

                                )
                            })}
                        </ul>
                    </div>
                )

            })}
        </div>
    )
}


export default FiltriProdotto
