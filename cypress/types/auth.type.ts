export interface LoginData {
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  country: string;
  postalCode: string;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  phoneNumber: string;
  email: string;
  password: string;
}
