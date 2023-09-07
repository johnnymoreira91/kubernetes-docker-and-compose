import type { SexType } from '@faker-js/faker';
import { faker } from '@faker-js/faker';

type SubscriptionTier = 'free' | 'basic' | 'business';

interface User {
  _id: string;
  avatar: string;
  birthday: Date;
  email: string;
  firstName: string;
  lastName: string;
  sex: SexType;
  subscriptionTier: SubscriptionTier;
}

export class GenPersonUseCase {
  async execute(): Promise<User> {
    const person = this.createRandomUser()

    return person
  }

  private createRandomUser(): User {
    return {
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType(),
      subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
  }
}