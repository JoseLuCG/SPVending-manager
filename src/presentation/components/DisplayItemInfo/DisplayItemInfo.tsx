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
    const [ itemType, setItemType ] = useState("");

    // Handlers:
    function backHandler() {
        setItem(null);
        navigate(-1);
    }

    // Functions:


    useEffect(()=>{
        if (item != null) {
            const type = typeDeterminer(item);
            setItemType(type);
        }
    }, [item]);

	return (
        <>
            <main className="mn-display">
                <div className="btn-container">
                <button onClick={backHandler}>Back</button>
                </div>
                {itemType==="Tenant"?<DisplayItemInfoTenant/>:""}
                {itemType=="Club"?<h1>Club page</h1>:""}
                {itemType=="User"?<h1>User page</h1>:""}
                {itemType=="Machine"?<h1>Machine page</h1>:""}
            </main>    
        </>
	);
}

export default DisplayItemInfo;