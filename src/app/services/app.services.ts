import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class AppServices{
    
    private username:string;
    private client_id = 'Iv1.ff4caf3f96d2ed17';
    private  client_secret = '4efa6fb17e33b80a4bf69841deeefa011c645f03';

    constructor(private _http:Http){
        console.log('Github Service Is Ready...');
        this.username = 'kumaresandots';
    }
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username)

    }

}

