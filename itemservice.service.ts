import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from './Model/itemList'





@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  _url = '';

  constructor(private _http : HttpClient) { }


  get_Enroll(item : Items)
{
 console.log("This is Service"+JSON.stringify(item));
 return this._http.post<any>(this._url,item)
}

}
