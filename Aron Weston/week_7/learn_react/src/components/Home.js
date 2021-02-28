import React from "react"
import Clock from './Clock'
import Counter from './Counter'
import Toggle from './Toggle'
import Button from './Button'
import Numbers from './Numbers'
import Form from './Form'
import FormUncontrolled from './FormUncontrolled'

export default function Home() {
   
    return (
        <div className="container">
            <h1>Hello World</h1>
            <Clock />
            <Toggle />
            <Counter increment={1} />
            <Button />
            <Numbers numbers={[1,3,4,5,6,7]} />
            <Form />
            <FormUncontrolled />
        </div>
    )
}
