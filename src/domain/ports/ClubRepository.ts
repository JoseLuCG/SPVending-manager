import { ClubApiResponse } from "../entities/api-models/apiResponse";
import { Club, ClubApi, ClubOption } from "../entities/models/club";

export interface ClubRepository {
    getAllClubs(): Promise<ClubApiResponse>;
    findClubByUuid(clubUuid: string): Promise<ClubApi | null>;
    addClub(club: Omit<Club, "clubId" | "numberOfMachines">): Promise<void>;
    modifyClub(club: Omit<Club, "numberOfMachines">): Promise<void>;
    deleteClub(uuid: string): Promise<void>;
    getClubOptions(): Promise<ClubOption[]>;
}