enum Rol {
    CLUB = 1,
    TENANT = 2
}

export type User = {
    userId: string,
    username: string,
    password: string,
    micronId: string,
    micronUser: string,
    micronPass: string,
    type: Rol,
    clubName: string,
    tenantId: string
}

export type UserInfoDisplay = {
    userManagerId: string,
    username: string,
    micronId: string,
    micronUser: string,
    tenantEntityName: string,
    clubEntityName: string
}