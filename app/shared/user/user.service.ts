import {Injectable} from '@angular/core';
import {User} from "./user";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Config} from "../config";

@Injectable()
export class UserService {
    constructor(private http: Http) {
    }

    register(user: User) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(Config.apiUrl + "Users", JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
        }), {headers: headers}).catch(this.handleErrors);
        // alert("About to register:" + user.email);
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify((error.json())));
        return Observable.throw(error);
    }
}