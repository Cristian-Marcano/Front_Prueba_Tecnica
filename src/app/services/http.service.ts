import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataShow } from '../modals/dataShow';
import { dataRedes } from '../modals/dataRedes';
import { operaciones } from '../modals/operaciones';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url:string='/EMQU';
  constructor(private http:HttpClient) { }
  showDatos():Observable<dataShow>{
    return this.http.get<dataShow>(this.url);
  }
  insertDatos(INSERT:dataRedes):Observable<operaciones>{
    return this.http.post<operaciones>(this.url,INSERT);
  }
}
