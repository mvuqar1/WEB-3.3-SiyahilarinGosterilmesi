import React from 'react'
import { useState } from 'react'
import Users from './UsersComponent/Users'

export default function Employees() {
    const [input, SetInput] = useState("")
    const [select, SetSelect] = useState("All")
    const [first, SetFirst] = useState(
        [
            {
                "id": 1,
                "name": "Frodo Baggins",
                "department": "Management",
                "role": "CEO",
                "live": "alive",
            },
            {
                "id": 2,
                "name": "Samwise Gamgee",
                "department": "Management",
                "role": "CTO",
                "live": "alive",
            },
            {
                "id": 3,
                "name": "Gandalf the Gray",
                "department": "Recruitment",
                "role": "Lead-recruiter",
                "live": "dead",
            },
            {
                "id": 4,
                "name": "Aragorn",
                "department": "Security",
                "role": "Security officer",
                "live": "alive",
            },
            {
                "id": 5,
                "name": "Legolas",
                "department": "Management",
                "role": "Office manager",
                "live": "dead",
            }
        ]
    )


    function handleChange(event) {
        SetInput(event.target.value)
    }
    function handleSelectChange(event) {
    
        SetSelect(event.target.value)
    }
    function handleAliveFilter(item){
        console.log(item)
        console.log(select);
        switch(select){
            case "All":
                return item;
            case "Alive":
                return item.live=="alive";
            case "Dead":
                return item.live== "dead"
        }
    }

    return (
        <div>
            <h1 style={{ backgroundColor: "red" }}>Fetch API</h1><br />
            <label>VVOD : <input onChange={handleChange} value={input}></input></label>
            <select onChange={handleSelectChange}>
                <option>All</option>
                <option>Alive</option>
                <option>Dead</option>
            </select>


            {first.filter((item) => +item.id >= +input)
            .filter(handleAliveFilter)
                .map((item) => {
                    return (
                        <Users key={item.id} users={item} />
                    )
                })}
        </div>
    )
}
