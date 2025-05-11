import { ClubRepository } from "../../../domain/ports/ClubRepository";
import { Club, ClubApi, ClubInfoDisplay, ClubOption } from "../../../domain/entities/models/club";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapClubFromApi } from "../../mappers/FromApi/ClubMapper";
import { mapClubToApi } from "../../mappers/ToApi/ClubMapperToApi";

export class ClubRepositoryHttp implements ClubRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.clubPath;

    async findClubByUuid(clubUuid: string): Promise<ClubApi | null> {
        const response = await fetch(`${this.BASEURL}/${clubUuid}`);
        const data = await response.json();
        if (!response.ok) return null;
        return data;
    }

    async getAllClubs(): Promise<ClubInfoDisplay[]> {
        const response = await fetch(this.BASEURL);
        const json = await response.json();
        return mapClubFromApi(json);
    }

    async addClub(club: Club): Promise<void> {
        const body = mapClubToApi(club);
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error adding the club");
    }

    async modifyClub(club: Club): Promise<void> {
        const body = mapClubToApi(club);
        const response = await fetch(
            this.BASEURL+`/${club.clubId}`,
            {
                method: "PUT",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error when modifying the club");
    }

    async deleteClub(uuid: string): Promise<void> {
        const response = await fetch(`${this.BASEURL}/${uuid}`);
        if (!response.ok) throw new Error("Error deleting club");
    }

    async getClubOptions(): Promise<ClubOption[]> {
        const response = await fetch(`${this.BASEURL}/${PATH_PREFIX.potentialTenants}`);
        const data = await response.json();
        return data;
    }    
}