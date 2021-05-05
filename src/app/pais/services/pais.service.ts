import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.eu/rest/v2";


  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }


  constructor( private http: HttpClient) { }

  buscarPais(termino: string, type: string): Observable<Country[]>{




    const url = `${this.apiUrl}/${type}/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams})
            .pipe(
              tap(console.log)
            );
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }








}
