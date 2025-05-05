import "./DisplayItemInfo.css"
import { useNavigate } from "react-router";
import DisplayItemInfoTenant from "./DisplayItemInfoTenant/DisplayItemInfoTenant";
import { useContext, useEffect, useState } from "react";
import { SelectedItem } from "../../../contexts/SelectedItemContext";
import { typeDeterminer } from "../../../utilities/tools/checkers";

function DisplayItemInfo() {
    // States:
    const [ item, setItem ] = useContext(SelectedItem);
    const navigate = useNavigate();
    let itemType = "";

    // Handlers:
    function backHandler() {
        setItem(null);
        navigate(-1);
    }

    // Functions:


    useEffect(()=>{
        if (item != null) {
            itemType = typeDeterminer(item);
            console.log(itemType);
        }
    });

	return (
        <>
            <main className="mn-display">
                <div className="btn-container">
                <button onClick={backHandler}>Back</button>
                </div>
                <DisplayItemInfoTenant></DisplayItemInfoTenant>
            </main>    
        </>
	);
}

export default DisplayItemInfo;