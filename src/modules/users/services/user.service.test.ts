import { UserService } from './user.service';
import UserModelMock from '../model/user.model.mock';

interface UserModelMockInterface {
  create: jest.Mock;
}

describe('UserService', () => {
  let userModelMock: UserModelMockInterface;
  let userService: UserService;

  beforeEach(() => {
    userModelMock = {
      create: jest.fn(),
    };
    userModelMock.create.mockResolvedValue({
      _id: 'mockedUserId',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'hashedPassword',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    userService = new UserService(userModelMock as any);
  });

  it('deve criar um novo usuário', async () => {
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'securepassword',
    };

    await expect(userService.create(userData)).resolves.toEqual(expect.objectContaining({
      _id: 'mockedUserId',
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'hashedPassword',
    }));
  });


  it('nao deve criar um novo usuário', async () => {
    const userData = {
      name: '',
      email: 'invalid.email',
      password: 'a',
    };


    await expect(userService.create(userData)).rejects.toThrow('User creation failed');
        console.log(userData)
  });


  it('deve lidar com uma falha na criação de usuário', async () => {
    userModelMock.create.mockRejectedValue(new Error('User creation failed'));
  
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'securepassword',
    };
  
    await expect(userService.create(userData)).rejects.toThrow('User creation failed');
  });
  
 

  
});
