import React, { useState, ChangeEvent, FormEvent, useEffect} from "react";

const BuscaCep = () =>{

    const [cep, setCep] = useState<string>("")

    const findCep = (e: FormEvent) => {
        e.preventDefault();
    }

    const submitForm = (e: ChangeEvent<HTMLInputElement>) => {
        if(e. target.name === "cep"){
            setCep(e.target.value);
        }
    }

    return (
        <div>
            <form>
                <label htmlFor="cep">CEP</label>
                <input type="text" name="cep" id="cep" onChange={submitForm} />
                <input type="submit" value="Pesquisar" />
            </form>
        </div>
    );
}

export default BuscaCep;