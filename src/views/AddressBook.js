import { Link } from "react-router-dom"

import './AddressBook.css'

const AddressBook = ({results}) => {

    return (
        <>     
        <div>
            <h2 className="title">Address Book:</h2>
        </div>

            <div className="legend">
                <li>To access the user details click on it's name.</li>
            </div>

            <div className="userLinkContainer">
                {results.map((d, i) => (
                    <ul className="userLink" key={i}>
                        <p>
                            <Link to={`/userDetails/${d.login.username}`}>{d.name.first} {d.name.last}</Link>
                        </p>
                    </ul>
                ))}
            </div>
        </>
    )   
}

export default AddressBook;