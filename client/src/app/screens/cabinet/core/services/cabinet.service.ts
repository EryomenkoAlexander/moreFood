import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {IUser} from "../../../auth/core/interfaces/IUser";
import {Observable} from "rxjs";

@Injectable()
export class CabinetService {

  constructor(
    private _http: HttpClient
  ) { }

  public getUser(id: string): Observable<IUser> {
    return this._http.get<IUser>(`${environment.apiUrl}/users/${id}`)
  }

}
