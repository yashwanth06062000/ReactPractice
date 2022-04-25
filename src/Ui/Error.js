import React from "react"
import Card from './Card'
import Button from './Button'
import Classes from './Error.module.css'

export default   function Error (props){
    return (
        <div>
            <div className={Classes.backdrop} onClick={props.onclickokay}/>
        <Card className={Classes.modal}>
            <header className={Classes.header}>
                <h2>{props.Error}</h2>
            </header>
            <div className={Classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={Classes.actions}>
                <Button title={"Okay"} onClick={props.onclickokay}></Button>

            </footer>
            
        </Card>
        </div>
        
    )
}