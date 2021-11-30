/*
Reference: 
https://alexnault.dev/dependency-inversion-principle-in-functional-typescript
*/

import axios from "axios";

// with dependency inversion

interface User {
  email: string;
  password: string;
}

// domain/ApiClient.ts
export interface ApiClient {
  createUser: (user: User) => Promise<void>;
  getUserByEmail: (email: string) => Promise<User>;
}

export function HttpClient(): ApiClient {
  return {
    createUser: async (user: User) => {
      return axios.post("https://mydomain.com");
    },
    getUserByEmail: async (email: string) => {
      return axios.get("https://mydomain.com");
    },
  };
}

//user ApiClient abstraction here

export const SignUpService =
  (client: ApiClient) => async (email: string, password: string) => {
    const existingUser = await client.getUserByEmail(email);

    if (existingUser) {
      throw new Error("Email already used");
    }

    return client.createUser({
      email,
      password,
    });
  };

//we can use the new implementation like so
const signup = SignUpService(HttpClient());
signup("bob@bob.com", "");

//inMemoryClient
export function InMemoryClient(): ApiClient {
  const users: User[] = [];

  return {
    createUser: async (user: User) => {
      users.push(user);
    },
    getUserByEmail: async (email: string) => {
      return users.find((user) => user.email === email);
    },
  };
}

// infra
// export const HttpClient = {
//   createUser: async (_user: User) => {
//     return axios.post();
//   },
//   getUserByEmail: async (_email: string) => axios.get(),
// };

// domain/SignUpService.ts

// export async function signup(email: string, password: string) {
//   const existingUser = await HttpClient.getUserByEmail(email);

//   if (existingUser) {
//     throw new Error("Email already used");
//   }

//   return HttpClient.createUser({
//     email,
//     password,
//   });
// }
