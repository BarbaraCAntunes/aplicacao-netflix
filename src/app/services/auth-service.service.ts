import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';

  constructor() { }

  authenticateUser(email: string, password: string): Promise<boolean> {
    if (email === 'barbaracantunes@gmail.com' && password === '1234') {
      localStorage.setItem(this.tokenKey, 'my_auth_token');
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
