import { RequestUserDTO } from './request.user.dto';

describe('RequestUserDTO', () => {
  it('Criacao de uma instancia valida com RequestUserDTO', () => {
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'securepassword',
    };

    const userDTO = new RequestUserDTO(userData);

    expect(userDTO.name).toBe(userData.name);
    expect(userDTO.email).toBe(userData.email);
    expect(userDTO.password).toBe(userData.password);
  });

  it('nao deve criar uma instancia usando email invalido', () => {
    const userData = {
      name: 'John Doe',
      email: 'invalid-email',
      password: 'short',
    };

    expect(() => new RequestUserDTO(userData)).toThrowError(
      'Invalid user data:'
    );
  });

  it('nao deve criar uma instancia usando nome invalido', () => {
    const userData = {
      name: '',
      email: 'joao.mentos@gmak.com',
      password: 'short',
    };

    expect(() => new RequestUserDTO(userData)).toThrowError(
      'Invalid user data:'
    );
  });

  it('nao deve criar uma instancia usando email com muitos caracteres', () => {
    const userData = {
      name: 'joao',
      email: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdqwe13e12e12e12e12e1212@dsdoksapodkaspodkaspdoakdqw0dqkw.com' ,
      password: 'short',
    };
 

    expect(() => new RequestUserDTO(userData)).toThrowError(
      'Invalid user data:'
    );
  });

});
