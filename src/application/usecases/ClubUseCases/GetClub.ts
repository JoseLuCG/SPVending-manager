import { ClubRepository } from "../../../domain/ports/ClubRepository";
import { Club } from "../../../domain/entities/models/club";

export class GetClub {
    constructor( private clubRepository: ClubRepository ){};

    async execute( clubUuid : string ): Promise<Club> {
        const club = await this.clubRepository.findClubByUuid(clubUuid);

        if(!club) throw new Error("Club not found");

        return club;
    }
}