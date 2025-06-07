import { User } from "../../../domain/entities/models/user";

export function mapUserToApi(user: Partial<User>): any {
	if (user.userType === 2) {
		return {
			username: user.username,
			password: user.password,
			micronId: user.micronId,
			micronUser: user.micronUser,
			micronPass: user.micronPass,
			userType: user.userType,
			tenantEntityId: user.tenantId,
			userId: user.userId ? user.userId : ""
		};
	}

	if (user.userType === 1) {
		return {
			username: user.username,
			password: user.password,
			micronId: user.micronId,
			micronUser: user.micronUser,
			micronPass: user.micronPass,
			userType: user.userType,
			clubEntityId: user.clubId,
			userId: user.userId ? user.userId : ""
		};
	}
}