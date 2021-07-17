import React from 'react'
import Person from './Person'

function NameList() {
    //const names = ['Bruce', 'Clarke', 'Diana']
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
    //const nameList = names.map(name => <h2>{name}</h2>)
    const personsList = persons.map(person => (
        <Person person={person} />
    ))

    return (
        <div>{personsList}</div>
    )
}

export default NameList
