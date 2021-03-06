import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Site} from "./model/site";

@Injectable()
export class SiteService {
    constructor(private http: Http) { }

    getSites(): Promise<Site[]> {
        // TODO Set correct hostname
        return this.http.get("http://localhost:52629/sites")
            .toPromise().then(response => response.json().sites.map((site) => new Site(site.id, site.name)))
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error("An error ocurred", error);
        return Promise.reject(error.message || error);
    }
}