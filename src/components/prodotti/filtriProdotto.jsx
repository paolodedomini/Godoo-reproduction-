import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { array } from "prop-types"

const FiltriProdotto = ({ categorie, setCategoria, setCategoriaPrincipale }) => {
    

    const [subCat, setSubCat] = React.useState()
    const [ids, setIds] = React.useState()


    function clickCategoria(categoriaPrincipale, categoria, id) {
        console.log(categoria);
        setCategoria(categoria.name)
        setCategoriaPrincipale(categoriaPrincipale)
        setIds(id)
        if (categoria.childId) {
            setSubCat(categoria.childId)
        }

    }
    return (
        <div className="filtri-prodotto">
            {categorie.map((categoria) => {
                return (
                    <div key={categoria.id} >
                        <h3>{categoria.name}</h3>
                        <ul>
                            {categoria.childId.map((item) => {
                                return (
                                    <li>
                                        {item.name}
                                        <ul>
                                            {item.childId.map((item) => {
                                                return <li onClick={() => clickCategoria(categoria.name, item, item.id)}>{item.name}</li>
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
