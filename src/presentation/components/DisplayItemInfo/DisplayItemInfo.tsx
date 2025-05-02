import "./DisplayItemInfo.css"
import { useNavigate } from "react-router";

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
                
            </main>    
        </>
	);
}

export default DisplayItemInfo;