import { Club, ClubInfoDisplay, ClubOption } from "../entities/models/club";

export interface ClubRepository {
    getAllClubs(): Promise<ClubInfoDisplay[]>;
    findClubByUuid(clubUuid: string): Promise<Club | null>;
    addClub(club: Club): Promise<void>;
    modifyClub(club: Club): Promise<void>;
    deleteClub(uuid: string): Promise<void>;
    getClubOptions(): Promise<ClubOption[]>;
}