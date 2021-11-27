class User {
  firstName: string;
  lastName: string;
  email: string;
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(name: string) {
    this._fullName = name;
  }

  doesMatchEmail(email: string): boolean {
    return this.email === email;
  }
}
