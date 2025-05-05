import "./DisplayItemInfo.css"
import { useNavigate } from "react-router";
import DisplayItemInfoTenant from "./DisplayItemInfoTenant/DisplayItemInfoTenant";
import { useContext, useEffect, useState } from "react";
import { SelectedItem } from "../../../contexts/SelectedItemContext";
import { typeDeterminer } from "../../../utilities/tools/checkers";
import DisplayItemInfoClub from "./DisplayItemInfoClub/DisplayItemInfoClub";
import DisplayItemInfoMachine from "./DisplayItemInfoMachine/DisplayItemInfoMachine";
import DisplayItemInfoUser from "./DisplayItemInfoUser/DisplayItemInfoUser";

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
                {itemType=="Club"?<DisplayItemInfoClub/>:""}
                {itemType=="User"?<DisplayItemInfoUser/>:""}
                {itemType=="Machine"?<DisplayItemInfoMachine/>:""}
            </main>    
        </>
	);
}

export default DisplayItemInfo;