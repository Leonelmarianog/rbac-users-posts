import { User } from '../../domain/user.entity';

export interface IUserService {
  getAll(): Promise<User[]>;

  getOneById(id: number): Promise<User>;

  getOneByExternalId(externalId: string): Promise<User>;

  create(user: User): Promise<User>;
}
