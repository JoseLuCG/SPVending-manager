//import styles from "./SelectClubOptions.module.css";
import { useEffect, useState } from "react";
import { SelectClubOptionProps } from "../../../domain/entities/property-models/componentsProperties";
import { ClubRepositoryHttp } from "../../../infraestructure/adapters/api/ClubRepositoryHttp";
import { ClubOption } from "../../../domain/entities/models/club";
import { GetClubOptions } from "../../../application/usecases/ClubUseCases/GetClubOptions";

const clubRepo = new ClubRepositoryHttp();
const getClubOptions = new GetClubOptions(clubRepo);

function SelectClubOptions({onSelectClub, clubName, clubUuid}: SelectClubOptionProps) {
    // States:
    const [ clubsOptions, setClubOptions ] = useState<ClubOption[]>([]);
    const [ selectOpen, setSelectOpen ] = useState(false);

    // Handlers:
    async function fetchClubs() {
        const response = await getClubOptions.execute();
        setClubOptions(response);
    }

    function onClickHandler() {
        if (!selectOpen) {
            fetchClubs();
            setSelectOpen(true);
        }
    }

    
    useEffect(
        ()=>{
            fetchClubs();
        },[]
    );

    return(
        <>
            <label htmlFor="clubs">Choose a club:</label>
            <br />
            <select name="clubEntityId" id="club-select" onClick={onClickHandler} onBlur={()=> setSelectOpen(false)} onChange={onSelectClub}>
                <option key={clubUuid} value={clubUuid}>{clubName}</option>
                {
                    clubsOptions
                        .filter(t => t.clubId !== clubUuid)
                        .map(
                            (c) => <option key={c.clubId} value={c.clubId}>{c.name}</option>
                    )
                }
            </select>
        </>
    );
}

export default SelectClubOptions;