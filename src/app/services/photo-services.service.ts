import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoServicesService implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getAlbums (): Observable <object[]> {
    return this.http.get<object[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getDetails (id:any): Observable <object[]> {
    return this.http.get<object[]>('https://jsonplaceholder.typicode.com/photos?albumId=7' + id)
  }


}
