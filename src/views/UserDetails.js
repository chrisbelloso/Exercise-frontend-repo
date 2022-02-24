// IMPORTS
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import './UserDetails.css'


// FUNCTION
export default function UserDetails({results}) {
    const { id } = useParams();

    const [user, setUser] = useState()
    const getRef = useRef()

    getRef.current = getUser()

    useEffect(() => {
        const foundUser = getRef.current
        setUser(foundUser)       
    }, [id])

    function getUser() {
        return results.find((item) => item.login.username === id)
    }
    
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <ul>
            {user ? <h1 className="detailName">{user.name.first} {user.name.last}</h1> : null}
            <h2 style={{color: "white"}}>Phone:</h2>
            {user ? <h1 className="detailPhone">{user.cell}</h1> : null}
            </ul>
        </div>
    )
}