import React from 'react'

export default function Users(props) {
    const { users } = props
    return (
        <div style={{fontWeight:"bold"},{color:"blue"},{border: '2px solid black'}}>
            <div style={{backgroundColor: "lightblue"}}>{users.id}</div>
            <div>{users.name}</div>
            <div>{users.department}</div>
            <div>{users.role}</div>
            <div>{users.live}</div>
            <br/>
        </div>
    )
}
