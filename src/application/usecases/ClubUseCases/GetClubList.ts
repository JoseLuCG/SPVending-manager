import { ClubRepository } from "../../../domain/ports/ClubRepository";
import { ClubApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class GetClubList {
    constructor(private clubRepository: ClubRepository){};

    async execute(page:number): Promise<ClubApiResponse> {
        const clubs: ClubApiResponse = await this.clubRepository.getAllClubs(page);
        
        if (!clubs) throw new Error("Club list is not available");

        return clubs;
    }
}