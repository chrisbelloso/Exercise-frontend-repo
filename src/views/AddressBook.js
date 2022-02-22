import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"

const AddressBook = ({results}) => {

    return (
        <>     
            <h2 style={{marginLeft: "10px"}}>Address Book:</h2>

            {results.map((d, i) => (
                <ul>
                    <h3 key={i}>
                        <Link to={`/userDetails/${d.id.value}`}>{d.name.first} {d.name.last}</Link>
                    </h3>
                </ul>
            ))}
        </>
    )   
}

export default AddressBook;