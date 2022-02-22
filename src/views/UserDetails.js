import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function UserDetails({results}) {
    const { id } = useParams();

    const [user, setUser] = useState()

    useEffect(() => {
        const foundUser = getUser()
        setUser(foundUser)       
    }, [id])

    function getUser() {
        return results.find((item) => item.id.value === id)
    }
    
    return (
        <div>
            
        </div>
    )
}