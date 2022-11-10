import { useState } from "react";
import Item from "./item";
import {v4 as uuidv4} from uuidv4;



export default function Form(){

    const [dataArr, setdataArr] = useState([
        {txt:"promener le chien", id: uuidv4()},
        {txt:"sport", id: uuidv4()},
        {txt:"coder", id: uuidv4()},
        {txt:"bouger", id: uuidv4()}

    ])

    const deleteElement = id =>{
        console.log(id);
    }

    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3"></label>
                <input type="text" className="form-control" id="todo" />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>Liste de choses à faire : </h2>
            <ul className="list-group">
                {dataArr.map((item) => {
                    return(
                        <Item 
                        txt={item.txt}
                        key={item.id}
                        delFunc = {deleteElement}
                        
                        />
                        

                        )
                })}
            </ul>

        </div>

    )
}