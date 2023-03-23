import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthService {

  constructor() { }

  public checkToken(): boolean {
    const token: string | null =  localStorage.getItem('moreFood-accessToken')
    return !!token
  }

}
