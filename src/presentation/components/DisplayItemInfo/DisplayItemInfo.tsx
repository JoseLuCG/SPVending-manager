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
                <button onClick={backHandler}>Back</button>
            </main>    
        </>
	);
}

export default DisplayItemInfo;