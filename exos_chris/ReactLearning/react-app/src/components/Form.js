import { useState } from "react"
import Item from "./item"
import { v4 as uuidv4 } from 'uuid'
import React from "react"



export default function Form(){

    const [dataArr, setDataArr] = useState([
    ])

    const [stateInput, setStateInput] = useState()

    const deleteElement = id => {
        // console.log(id);
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }


    const addTodo = e =>{
        e.preventDefault();
        // nouveau tableau avec la copie du state
        const newArr = [...dataArr]
        // creation d'un nouvel objet
        const newTodo={}
        // rajouter une propriete TXT
        newTodo.txt=stateInput
        // creer un nouvel id
        newTodo.id=uuidv4()
        // rajout du nouvel objet
        newArr.push(newTodo)
        // changement du state avec le nouveau tablea
        setDataArr(newArr)
        // remise de l'input à 0 ou vide
        setStateInput('')


    }

    const linkedInput= e => {
        setStateInput(e);
    }


    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label rounded mt-3">Choses à faire</label>
                <input 
                    value={stateInput}
                    onChange={e => linkedInput(e.target.value)}
                    type="text" 
                    className="form-control" 
                    id="todo"/>
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste de choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return(
                        <Item
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        />
                    )
                }
                )}
            </ul>
        </div>
    )
}