import { RegisterData } from '@/types/auth.type';
import {
  generateRandomPassword,
  generateUniqueEmail,
} from '@/utils/auth-generator.util';

export const generateRegisterData = (): RegisterData => ({
  firstName: 'Test',
  lastName: 'User',
  dateOfBirth: '1994-01-01',
  phoneNumber: '1234567890',
  street: 'Test St',
  houseNumber: '123',
  city: 'Test City',
  state: 'Test State',
  country: 'UA',
  postalCode: '12345',
  email: generateUniqueEmail(),
  password: generateRandomPassword(),
});
