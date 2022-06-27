import React, { useState, useEffect } from "react"



function ApiComponent ( {apis} ) {

    const [viewMore, setViewMore] = useState(false)



    useEffect(() => {
        setViewMore()
      }, [])
    
    return(
        <div className="main">
            <div id="apicomp" className="content" onMouseOver={() => console.log("Card was hovered!")} >
                {/* { !viewMore  ? */}
                    <div className="front">
                        <img src={apis.avatar} alt="Avatar" onMouseOver={() => console.log("Hovered!")} />
                        <p>Name: {apis.first_name} {apis.last_name}</p>
                        <p>Date of Birth: {apis.date_of_birth} </p>
                        <p>Phone: {apis.phone_number} </p>
                        <p>Email: {apis.email} </p>
                        {/* <button onClick={() => setViewMore(!viewMore)}>{ !viewMore ? "View More" : "View Less"}</button> */}
                    </div>
                    
                    
                    <div className="back">
                        {/* <img src={apis.avatar} alt="Avatar" />
                        <p>Name: {apis.first_name} {apis.last_name}</p>
                        <p>Date of Birth: {apis.date_of_birth} </p>
                        <p>Phone: {apis.phone_number} </p>
                        <p>Email: {apis.email} </p> */}
                        <p>Country: {apis.address.country} </p>
                        <p>State: {apis.address.state} </p>
                        <p>City: {apis.address.city} </p>
                        <p>Gender: {apis.gender} </p>
                        <p>Credit Card: {apis.credit_card.cc_number} </p>
                        <p>Job: {apis.employment.title} </p>
                        <p>User Name: {apis.username} </p>
                        {/* <button onClick={() => setViewMore(!viewMore)}>{ viewMore ? "View Less" : "View More" }</button> */}

                    </div>
                {/* } */}
                    
                
            </div>
            
            
        </div>
    )
}


export default ApiComponent