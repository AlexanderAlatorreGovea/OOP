// tests/SignUpService.spec.ts

import {
  InMemoryClient,
  SignUpService,
} from "./functional.dependency.inverstion";

//InMemoryClient is a mock function

let signup;

beforeEach(() => {
  signup = SignUpService(InMemoryClient());
});

test("it should signup a user", async () => {
  await expect(signup("john@test.com", "pwd123")).resolves.toBe(undefined);
});

test("it should fail to signup the same email twice", async () => {
  await signup("mark@test.com", "pwd123");
  await expect(signup("mark@test.com", "pwd987")).rejects.toThrow(
    new Error("Email already used")
  );
});

