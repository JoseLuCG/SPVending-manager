import { UserRepository } from "../../../domain/ports/UserRepository";
import { User, UserApi } from "../../../domain/entities/models/user";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapUserToApi } from "../../mappers/ToApi/UserMapperToApi";
import { authHandler } from "../Auth/AuthHandler";
import { UserApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class UserRepositoryHttp implements UserRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.usersPath;

    async findUserByUuid(userUuid: string): Promise<UserApi | null> {
        const response = await authHandler(`${this.BASEURL}/${userUuid}`, {credentials: "include"});
        return await response;
    }

    async getAllUsers(): Promise<UserApiResponse> {
        const json = await authHandler(this.BASEURL, {credentials: "include"});
        return json;
    }

    async addUser(user: Omit<User, "userId" | "clubName">): Promise<void> {
        const body = mapUserToApi(user);
        const response = await authHandler(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async modifyUser(user: User): Promise<void> {
        const body = mapUserToApi(user);
        const response = await authHandler(
            this.BASEURL+`/${user.userId}`,
            {
                method: "PUT",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async deleteUser(userUuid: string): Promise<void> {
        const response = await authHandler(
            `${this.BASEURL}/${userUuid}`,
            {
                method: "DELETE",
                credentials: "include"
            });
        return response;
    }
}