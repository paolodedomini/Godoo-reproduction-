import React from 'react'

function BreadCrumb({ categorie, alberaturaCategoria }) {

    const categoriaPrincipale = alberaturaCategoria.corrente !== 'default' && categorie.find((item) => alberaturaCategoria.categoriaPrincipale === item.id)

    return (
        <>
            {alberaturaCategoria.corrente !== 'default' &&
                <div className="categoria-corrente">
                    <ul>
                     {categoriaPrincipale && <li>{categoriaPrincipale.name }</li>}
                        <li> {alberaturaCategoria.corrente}</li>
                    </ul>
                    
                   
                </div>
            }

        </>)
}

export default BreadCrumb