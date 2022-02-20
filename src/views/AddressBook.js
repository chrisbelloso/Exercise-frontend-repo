import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"

const AddressBook = () => {
    const [results, setResults] = useState([])
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=5")
         .then(res => {
             console.log(res.data.results)
             setResults(res.data.results)
         })
         .catch(err => console.log(err))
    }, [])

    return (
        <>     
            <h2 style={{marginLeft: "10px"}}>Address Book:</h2>

            {results.map((d, i) => (
                <ul>
                    <h3 key={i}>
                        <Link to={'/userDetails'}>{d.name.first} {d.name.last}</Link>
                    </h3>
                </ul>
            ))}
        </>
    )   
}

export default AddressBook;