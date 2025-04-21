import { User } from "./../entities/models/user"

export interface UserRepository {
    getAllUsers() : Promise<User[]>;
    findUserByUuid( userUuid : string ) : Promise< User | null >;
    addUser( user : User ) : Promise<void>;
    modifyUser( user :User) : Promise<void>;
    deleteUser(userUuid: string) : Promise<void>
}