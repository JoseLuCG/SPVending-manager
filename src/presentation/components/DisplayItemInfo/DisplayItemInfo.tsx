import "./DisplayItemInfo.css"
import { useNavigate } from "react-router";
import DisplayItemInfoTenant from "./DisplayItemInfoTenant/DisplayItemInfoTenant";

function DisplayItemInfo() {
    const navigate = useNavigate();

    function backHandler() {
        navigate(-1);
    }

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