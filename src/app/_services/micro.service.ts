import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Assessment_hur } from '../_models/index';

@Injectable()
export class MicroService {
    ApiEndPoint = 'demo.apa.com/';

    constructor(private http: Http) {}

    getAssessments_hur(details: Assessment_hur) {
        /*console.log('------------');
        console.log(details);
        console.log('------------');*/
        //return this.http.get(this.ApiEndPoint+'asa/assessments', this.auth(details)).map((response: Response) => response.json());
        return this.http.post(this.ApiEndPoint+'asa/assessments',details, this.auth()).map((response: Response) => response.json());
    }

    private auth() {        
        let headers = new Headers({ 'Authorization': 'Bearer ' + '9748797918' });
        return new RequestOptions({ headers: headers });
    }
}