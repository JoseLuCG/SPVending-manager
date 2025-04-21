import { UserRepository } from "../../../domain/ports/UserRepository";
import { User } from "../../../domain/entities/models/user";

export class GetUserList {
    constructor( private userRepository: UserRepository ){};

    async execute(): Promise<User[]> {
        const users = await this.userRepository.getAllUsers();
        
        if (!users) throw new Error("User list is not available");

        return users;
    }
}