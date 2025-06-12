import { ClubRepository } from "../../../domain/ports/ClubRepository";
import { Club, ClubApi, ClubOption } from "../../../domain/entities/models/club";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapClubToApi } from "../../mappers/ToApi/ClubMapperToApi";
import { authHandler } from "../Auth/AuthHandler";
import { ClubApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class ClubRepositoryHttp implements ClubRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.clubPath;

    async findClubByUuid(clubUuid: string): Promise<ClubApi | null> {
        const response = await authHandler(`${this.BASEURL}/${clubUuid}`, { credentials: "include" });
        return response;
    }

    async getAllClubs(page: number): Promise<ClubApiResponse> {
        const response = await fetch(`${this.BASEURL}?page=${page}`, { credentials: "include" });
        if (response.ok) return await response.json();
        if (response.status === 401) throw new Error(`${response.status}`);
        if (response.status === 404) return { content: [], page: { number: 0, size: 0, totalElements: 0, totalPages: 0 } };
        throw new Error(`Error fetching clubs: ${response.statusText}`);
    }

    async addClub(club: Omit<Club, "clubId" | "numberOfMachines">): Promise<void> {
        const body = mapClubToApi(club);
        const response = await authHandler(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async modifyClub(club: Omit<Club, "numberOfMachines">): Promise<void> {
        const body = mapClubToApi(club);
        const response = await authHandler(
            this.BASEURL + `/${club.clubId}`,
            {
                method: "PUT",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async deleteClub(uuid: string): Promise<void> {
        const response = await authHandler(
            `${this.BASEURL}/${uuid}`,
            {
                method: "DELETE",
                credentials: "include"
            });
        return response;
    }

    async getClubOptions(): Promise<ClubOption[]> {
        const response = await authHandler(`${this.BASEURL}/${PATH_PREFIX.potentialTenants}`, { credentials: "include" });
        return response;
    }
}