import React from 'react';

const PaginaDos = (routeProps) => {
    console.log('paginaDos');

    const palabra= routeProps.match.params.var;
    const color1=routeProps.color1;
    const color2=routeProps.color2;

    const mostrar= ()=>
    {
        if(isNaN(palabra)){
            return (
                <h1>La palabra es: {palabra} </h1>
            )
        }
        else{
            return (
                <h1>El número es: {palabra} </h1>
            )
        }
    }

    return (
        <div style={{backgroundColor: color2,color:color1}}>
            <h1> {mostrar()} </h1>
        </div>
    );
}

export default PaginaDos;