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
                "name": "Vuqar",
                "department": "IT",
                "role": "Web Developer",
                "live": "alive",
            },

        ]
    )

    function createHandle(event) {
        event.preventDefault()
        const e = event.target
        // console.log(e.name.value);
        let newUser = {
            "id": Math.floor(Math.random() * 10000),
            "name": e.name.value,
            "department": e.department.value,
            "role": e.role.value,
            "live": e.live.value,
        }
        let clone = [...first, newUser]
        SetFirst(clone)
    }
    function randomHandler(event) {
        let randomWords = require('random-words');
        event.preventDefault()
        const deadOrLive = ["dead", "alive"]
        event.target.form.name.value = randomWords(1);
        event.target.form.department.value = randomWords(1);
        event.target.form.role.value = randomWords({ min: 3, max: 10, join: ' '});
        event.target.form.live.value = deadOrLive[Math.floor(Math.random() * +deadOrLive.length)];
    }

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
            <form id='formConainer' onSubmit={createHandle}>
                <input placeholder='Name' name='name'></input><br />
                <input placeholder='Department' name='department'></input><br />
                <input placeholder='Role' name='role'></input><br />
                <input placeholder='Live' name='live'></input><br />


                <button type='submit'>Create</button>
                <button onClick={randomHandler} type='submit'>Random</button>

            </form>
            <label>Search by id : <input onChange={handleChange} value={input}></input></label>
            <label>Search by name : <input onChange={handleChange2} value={input2}></input></label>
            <select onChange={handleSelectChange}>
                <option>All</option>
                <option>Alive</option>
                <option>Dead</option>
            </select>


            {first.filter((item) => +item.id >= +input)
                .filter((item) => item.name.toLocaleLowerCase().includes(input2.toLocaleLowerCase()))
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
