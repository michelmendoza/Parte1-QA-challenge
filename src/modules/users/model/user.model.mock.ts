import { Model, Document } from 'mongoose';

// modelo
type MockedUserDocument = Document & {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

// Crie o mock modelo
export const UserModelMock: Model<MockedUserDocument> = {
  find: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  
} as any; 

export default UserModelMock;
