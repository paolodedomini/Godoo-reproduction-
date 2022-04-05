import React from 'react'

function BreadCrumb({categorie, alberaturaCategoria}) {
    return (
        <>  
        {alberaturaCategoria.corrente !== 'default' &&
            <div className="categoria-corrente">{alberaturaCategoria.corrente}</div>
        }

        </>)
}

export default BreadCrumb