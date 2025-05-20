import { TenantApiResponse } from "../../../domain/entities/api-models/apiResponse";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";

export async function authHandler(request:Response): Promise<TenantApiResponse | null> {
    const URL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.refreshToken;
     
    if (request.ok) return await request.json();
    if ( (!request.ok) && (request.status !== 401) ) throw new Error(`Error: status ${request.status}`);
    if (request.status == 401) {
        const response = await fetch(URL, {
            method: "POST",
            credentials: "include"
        });
        console.log(response.status);
           
    }
    return null;
}