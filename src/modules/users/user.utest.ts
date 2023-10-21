import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';  
import { typeDefs } from '../../server';
import { resolvers } from './resolvers/user.resolver.interface';  
import { userModule } from './factories/user.factory';  
import { User } from './model/user.type';

 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => userModule,  
});

const { mutate } = createTestClient(server);

describe('Testes Mutation: createUser', () => {
  it('should create user', async () => {
 
    const userData = {
      user: {
        email: 'mmm@zita.com',
        name: 'zita',
        password: 'zitazitazita',
      },
    };

    // mutation createUser
    const createUserMutation = `
      mutation CreateUser($user: UserInput!) {
        createUser(user: $user) {
          _id
          createdAt
          email
          name
          updatedAt
        }
      }
    `;

    const response = await mutate({
      mutation: createUserMutation,
      variables: userData,
    });

 
    expect(response.errors).toBeUndefined(); 
    expect(response.data.createUser).toBeDefined();
    const createdUser: User = response.data.createUser;
    expect(createdUser.email).toBe(userData.user.email);
    expect(createdUser.name).toBe(userData.user.name);
    // 
    expect(createdUser.createdAt).toBeDefined();
    expect(createdUser.updatedAt).toBeDefined();
  });
});
