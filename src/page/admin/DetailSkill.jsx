import React from 'react'
import { useParams } from 'react-router-dom'


function DetailSkill({skills}) {
    const { id } = useParams();
    
    const skill = skills.find((item) => item.id === Number(id));

    if (!skill) {
        return (
            <div>
                <h1>Empty skill</h1>
            </div>
        )
    }

    return (
        <div>
            <h2>DetailSkill</h2>

            <p>{skill.title}</p>
        </div>
    )
}

export default DetailSkill