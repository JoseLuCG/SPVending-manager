import { UserRepository } from "../../../domain/ports/UserRepository";
import { User, UserInfoDisplay } from "../../../domain/entities/models/user";
import { mapUserFromApi } from "../../mappers/FromApi/UserMapper";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";

export class UserRepositoryHttp implements UserRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.usersPath;

    async findUserByUuid(userUuid: string): Promise<User | null> {
        const response = await fetch(`${this.BASEURL}/${userUuid}`);
        if (!response.ok) return null;
        return response.json();
    }

    async getAllUsers(): Promise<UserInfoDisplay[]> {
        const response = await fetch(this.BASEURL);
        const json = await response.json();
        return mapUserFromApi(json);
    }

    async addUser(user: User): Promise<void> {
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error adding user");
    }

    async modifyUser(user: User): Promise<void> {
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error when modifying the user");
    }

    async deleteUser(userUuid: string): Promise<void> {
        const response = await fetch(`${this.BASEURL}/${userUuid}`);
        if (!response.ok) throw new Error("Error deleting user");
    }
}