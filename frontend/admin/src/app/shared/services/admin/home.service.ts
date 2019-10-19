import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';


import { AuthAdminService } from './auth-admin.service'
import { environment } from '../../../../environments/environment'


@Injectable()
export class HomeService {
    constructor(
        private authAdminService: AuthAdminService,
        private http: Http,
        private http2: HttpClient,
        public jwtHelper: JwtHelper,
    ) {}

    get() {
        return this.http.get(
            environment.apiUrl + '/user/home',
            this.authAdminService.createAuthenticationHeaders()
        ).map(res => res.json());
    }

    getProperties() {
        return this.http.get(
            environment.apiUrl + '/user/home/properties',
            this.authAdminService.createAuthenticationHeaders()
        ).map(res => res.json());
    }

    addFunds(data) {
        return this.http.post(
            environment.apiUrl + '/user/invest/investproperties',
            data,
            this.authAdminService.createAuthenticationHeaders()
        )
    }

};
