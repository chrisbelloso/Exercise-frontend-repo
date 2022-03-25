// IMPORTS
import { Fragment, useEffect, useRef, useState } from "react";
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
        <>
        <div>
            <h2 className="title">Address Book:</h2>
        </div>
        <div className=  "userDetailContainer">
            <ul>
            {user ? <img src={user.picture.large} alt="#"/> : null}
            {user ? <h1>{user.name.first} {user.name.last}</h1> : null}
            {user ? <p className="detailPhone"> Phone: {user.cell}</p> : null}
            </ul>
        </div>
        </>
    )
}