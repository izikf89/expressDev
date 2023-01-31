import { DeleteResult, Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { UserDto } from "../dto/user.dto";
import { User } from "../entry/User";

const userRepository: Repository<User> = AppDataSource.getRepository(User)

async function getAll(): Promise<User[]> {
    return await userRepository.find();
}

async function get(id: number): Promise<User> {
    return await userRepository.findOneBy({ id: id });
}

async function getBy(filter: User): Promise<User[]> {
    return await userRepository.find({where: filter});
}

async function add(user: UserDto): Promise<UserDto & User> {
    return await userRepository.save(user)
}

async function remove(id: number): Promise<DeleteResult> {
    return await userRepository.delete(id)
}

async function update(id: number, updateUser: UserDto): Promise<any> {
    const currentUser: User = await get(id);
    if (currentUser == null)
        return null;

    const user: User = { ...currentUser, ...updateUser };
    return await userRepository.update(id, user);
}

const userRepo = { getAll, get, getBy, add, remove, update, userRepository }

export default userRepo;
