import { RegData } from './../reg-data';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()

export class RegService {

  constructor(private http: HttpClient) { }

 /* private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      return throwError(error);

    }
  }*/

  regUser(regData: RegData): Observable<object>{
    const options =  {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      observe: 'body' as const,
    };

    const body = JSON.stringify(regData);

    return this.http.post('http://localhost:5000/reg', body, options);


  }
}
