import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentencesService {
  url:string="http://localhost/php/german_phrases.php";
  constructor(private http: HttpClient) {

    
   }

   getQuote(): Observable<any>{
    return this.http.get(this.url);
  }
}
