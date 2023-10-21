import { UserMongooseRepository } from '../repositories/user.mongoose.repository';
import UserModelMock from '../model/user.model.mock';  

const userMongooseRepositoryMock = new UserMongooseRepository(
  UserModelMock as any  
);

export default userMongooseRepositoryMock;
