import { ClubRepository } from "../../../domain/ports/ClubRepository";
import { Club, ClubInfoDisplay } from "../../../domain/entities/models/club";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapClubToApi } from "../../mappers/ToApi/ClubMapperToApi";

export class ClubRepositoryHttp implements ClubRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.clubPath;

    async findClubByUuid(clubUuid: string): Promise<Club | null> {
        const response = await fetch(`${this.BASEURL}/${clubUuid}`);
        if (!response.ok) return null;
        return response.json();
    }

    async getAllClubs(): Promise<ClubInfoDisplay[]> {
        const response = await fetch(this.BASEURL);
        return response.json();
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
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(club),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error when modifying the club");
    }

    async deleteClub(uuid: string): Promise<void> {
        const response = await fetch(`${this.BASEURL}/${uuid}`);
        if (!response.ok) throw new Error("Error deleting club");
    }
}