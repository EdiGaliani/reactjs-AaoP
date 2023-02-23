import React from "react";

function Users(props) {
    return (
        <>
            <div className="user-container">
                Nome: <strong>{props.user.firstName} {props.user.lastName}</strong>
            </div>
        </>
    )
}

export default Users