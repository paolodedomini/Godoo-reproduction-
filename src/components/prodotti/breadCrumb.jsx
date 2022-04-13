import React from 'react'

function BreadCrumb({ categorie, alberaturaCategoria }) {
    console.log(categorie, 'categorie');
    console.log(alberaturaCategoria, 'alberaturacategorie');
    const categoriaPrincipale = alberaturaCategoria.corrente !== 'default' && categorie.find((item) => alberaturaCategoria.categoriaPrincipale === item.id)
    console.log(categoriaPrincipale);
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