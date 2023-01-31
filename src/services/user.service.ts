import { DeleteResult } from "typeorm";
import { UserDto } from "../data/dto/user.dto";
import { User } from "../data/entry/User";
import userRepo from "../data/repo/user.repo";

async function getAll(): Promise<User[]> {
    return await userRepo.getAll();
}

async function get(id: number): Promise<User> {
    return await userRepo.get(id);
}

async function getBy(filter: User): Promise<User[]> {
    return await userRepo.getBy(filter);
}

async function add(user: UserDto): Promise<UserDto & User> {
    return await userRepo.add(user)
}

async function remove(id: number): Promise<DeleteResult> {
    return await userRepo.remove(id)
}

async function update(id: number, updateUser: UserDto): Promise<any> {
    return await userRepo.update(id, updateUser);
}

const userService = { getAll, get, getBy, add, remove, update }

export default userService;