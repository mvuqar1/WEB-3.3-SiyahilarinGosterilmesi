import React from 'react'
import { useState } from 'react'
import Users from './UsersComponent/Users'

export default function Employees() {
    const [input, SetInput] = useState("")
    const [input2, SetInput2] = useState("")
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
            },
            {
                "id": 6,
                "name": "Vugar",
                "department": "IT",
                "role": "Web developer",
                "live": "alive",
            }
        ]
    )


    function handleChange(event) {
        SetInput(event.target.value)
    }
    function handleChange2(event) {
        SetInput2(event.target.value)
    }

    function handleSelectChange(event) {
        SetSelect(event.target.value)
    }

    function handleAliveFilter(item) {
        // console.log(item)
        // console.log(select);
        switch (select) {
            case "All":
                return item;
            case "Alive":
                return item.live === "alive";
            case "Dead":
                return item.live === "dead";
            default:
        }
    }

    function deleteFunc(id) {
        // console.log(id);
        // let newUser=first.filter((item)=>item.id!==id)
        // console.log(newUser);
        SetFirst(
            first.filter((item) => item.id !== id)
        );
    }

    return (
        <div>
            <h1 style={{ backgroundColor: "red" }}>Fetch API</h1><br />
            <label>VVOD : <input onChange={handleChange} value={input}></input></label>
            <label>VVOD PO IMENI : <input onChange={handleChange2} value={input2}></input></label>
            <select onChange={handleSelectChange}>
                <option>All</option>
                <option>Alive</option>
                <option>Dead</option>
            </select>


            {first.filter((item) => +item.id >= +input)
                .filter((item)=>item.name.toLocaleLowerCase().includes(input2.toLocaleLowerCase()))
                .filter(handleAliveFilter)            //????  .filter(handleAliveFilter)   =====    .filter(((item)=>handleAliveFilter(item)))  
                // .filter(() => deleteFunc)             //????  .filter(() => deleteFunc)    =====    .filter((item) => deleteFunc)
                .map((item) => {

                    return (
                        <Users
                            key={item.id}
                            users={item}
                            deleteFunc={() => deleteFunc(item.id)} />
                    )
                })}
        </div>
    )
}
