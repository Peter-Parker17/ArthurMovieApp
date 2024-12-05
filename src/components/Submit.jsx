import React, { useEffect, useState } from "react";
import axios from "axios";

function Submit() {
    const [users, setUsers] = useState([])


    async function main() {
        const { data } = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=b5cd70c4&s=${movieTitles || ""}`)
        setUsers(data)
    }

    useEffect(() => {
        main();
    }, [])
    
    return (
        <div>
            {users.length > 0
            ? <h1>{users[0]?.name}</h1>
            : <h1>Loading...</h1>
            }
        </div>
    )
}

export default Submit;