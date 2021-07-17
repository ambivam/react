import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clarke', 'Diana','Diana']
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill: 'React'
        },
        {
            id:2,
            name:'Clarke',
            age:25,
            skill: 'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill: 'vue'
        }
    ]
    const nameList = names.map((name,index) => <h2 key={index}> {index} : {name}</h2>)
    // const personsList = persons.map(person => (
    //     <Person key = {person.id} person={person} />
    // ))

    return (
        <div>{nameList}</div>
    )
}

export default NameList
