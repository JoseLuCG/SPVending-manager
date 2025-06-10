import { ClubRepository } from "../../../domain/ports/ClubRepository";
import { ClubOption } from "../../../domain/entities/models/club";

export class GetClubOptions {
    constructor(private clubRepository: ClubRepository){};

    async execute(): Promise<ClubOption[]> {
        const clubs: Promise<ClubOption[]> = this.clubRepository.getClubOptions();
        return clubs;
    }
}