import React, { useState, useEffect } from "react"
import ApiComponent from "./ApiComponent"


function FetchApi () {

    const [apiFetch, setApiFetch] = useState([])

    const fetchApiCall = "https://random-data-api.com/api/users/random_user?size=10"


    // async function apiCall () {
    //     const response = await fetch(fetchApiCall);
    //     let resData = await response.json();
    //     console.log(resData);
    // }

    const apiCall = () => {
        fetch(fetchApiCall)
            .then((res) => (res.json()))
            .then((json) => {setApiFetch(json)
                console.log(json)
            }).catch(err => console.log('An error occured', err))
            
    }

    useEffect(() => {
        apiCall()
      }, [])

        return(
            
                
            <div >
                <div className="fetch-container">
                {
                    apiFetch.map((apis) => {
                        
                return (
                    <ApiComponent key={apis.id} apis={apis} />  
                )
                
                    })
                }
                </div>
            </div>
           
        )
}



export default FetchApi