import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IUser} from "../core/interfaces/IUser";
import {IAccessToken} from "../core/interfaces/IAccessToken";

@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  public register(data: IUser): Observable<IUser> {
    return this._http.post<IUser>(`${environment.apiUrl}/users`, data)
  }

  public signIn(data: IUser): Observable<IAccessToken> {
    return this._http.post<IAccessToken>(`${environment.apiUrl}/auth/login`, data)
  }

}
