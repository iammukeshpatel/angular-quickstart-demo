import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class UserService {
  isLoggedIn: any;
  user: any;
  constructor() {}
}