export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    areaCode: number,
    telephone: number,
    document: number,
    location: string,
    province: string,
    address: string,
    postalCode: number,
    roleId: number
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
