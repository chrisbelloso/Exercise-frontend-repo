import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function UserDetails({data}) {
    const { id } = useParams();

    const user = getUser();

    function getUser() {
        return data.find((c) => c.name.first === id);
    }
    
    return (
        <div>
            <h2>{id}</h2>
             <h1>{user.name.first}</h1>
        </div>
    )
}