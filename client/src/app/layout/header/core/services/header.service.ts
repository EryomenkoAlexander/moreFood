import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../../../screens/auth/core/interfaces/IUser";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class HeaderService {

  constructor(
    private _http: HttpClient
  ) { }

  public getUser(id: string): Observable<IUser> {
    return this._http.get<IUser>(`${environment.apiUrl}/users/${id}`)
  }

}
