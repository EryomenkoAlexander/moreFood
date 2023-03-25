import {Injectable} from "@angular/core";
import {IUser} from "../../screens/auth/core/interfaces/IUser";
import {map, Observable, Subject} from "rxjs";
import {environment} from "../../../environments/environment";
import {ILoginResponse} from "../../screens/auth/core/interfaces/ILoginResponse";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class AuthService {

  public signalAuth: Subject<string> = new Subject<string>()

  constructor(
    private _http: HttpClient
  ) { }

  public checkToken(): boolean {
    const token: string | null =  localStorage.getItem('moreFood-accessToken')
    return !!token
  }

  public getUserId(): string | null {
    const userId: string | null =  localStorage.getItem('moreFood-userId')

    return userId ? userId : null
  }

  public register(data: IUser): Observable<IUser> {
    return this._http.post<IUser>(`${environment.apiUrl}/users`, data)
  }

  public signIn(data: IUser): Observable<ILoginResponse> {
    return this._http.post<ILoginResponse>(`${environment.apiUrl}/auth/login`, data)
      .pipe(
        map((response: ILoginResponse) => {
          this.signalAuth.next(response._id)
          return response
        })
      )
  }

}
