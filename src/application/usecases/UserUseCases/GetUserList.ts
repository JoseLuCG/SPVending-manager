import { UserRepository } from "../../../domain/ports/UserRepository";
import { UserApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class GetUserList {
    constructor( private userRepository: UserRepository ){};

    async execute(page:number): Promise<UserApiResponse> {
        const users = await this.userRepository.getAllUsers(page);
        
        if (!users) throw new Error("User list is not available");

        return users;
    }
}