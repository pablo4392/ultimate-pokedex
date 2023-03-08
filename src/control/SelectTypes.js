import { useEffect, useState } from "react";
import Services from "../service/Services";
import "./control.css";

const SelectTypes  = ({handleSelectTypes}) => {
    const [allTypes, setAllTypes] = useState([]);

    useEffect(() => {
        Services.pokemonTypes().then(response =>{
            setAllTypes(response.data.results)
        })
    }, [])

    const typesArray = allTypes.map(value => (
        <option key={value.name} value={value.name}>{value.name.toUpperCase()}</option>
    ))

    return(
        <select className="select-types" onChange={handleSelectTypes}>
            <option value="" selected disabled>Chose a type</option>
            {typesArray}
        </select>
    )
}

export default SelectTypes;