import React from 'react';

const PaginaUno = (routeProps) => {
    console.log('paginaUno');
    
    const variable= routeProps.match.params.var;
    const mostrar= ()=>
    {
        if(isNaN(variable)){
            return (
                <h1>La palabra es: {variable} </h1>
            )
        }
        else{
            return (
                <h1>El número es: {variable} </h1>
            )
        }
    }

    return (
        <div>
            {mostrar()}
        </div>
    );
}

export default PaginaUno;