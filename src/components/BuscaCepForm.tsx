import React from "react";

const BuscaCep = () =>{
    return (
        <div>
            <form>
                <label htmlFor="cep">CEP</label>
                <input type="text" name="cep" id="cep" />
                <input type="submit" value="Pesquisar" />
            </form>
        </div>

    );
}

export default BuscaCep;