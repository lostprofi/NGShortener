import { ErrorComponent } from './../error/error.component';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(tap(
      (res: HttpResponse<string>) => {

        if (res instanceof HttpResponse){
          this.dialog.open(AlertComponent, {data: {message: res.body}});
        }
      },
      (error: HttpErrorResponse) => {
        const errorMessage = error.error.errors;
        this.dialog.open(ErrorComponent, { data: {message: errorMessage}});
        return throwError(error);
      }
    ));
  }
}
