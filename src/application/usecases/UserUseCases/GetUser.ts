import { UserRepository } from "../../../domain/ports/UserRepository";
import { User } from "../../../domain/entities/models/user";

export class GetUser {
    constructor( private userRepository: UserRepository ){};

    async execute( userUuid : string ): Promise<User> {
        const user = await this.userRepository.findUserByUuid(userUuid);

        if(!user) throw new Error("User not found");

        return user;
    }
}