import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Album, Photo } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  BASE_URL: string = 'https://jsonplaceholder.typicode.com'
  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbumById(id: number): Observable<Album>{
    return this.http.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  deleteAlbum(id:number){
    return this.http.delete(`${this.BASE_URL}/albums/${id}`);
  }

  createAlbum(newAlbum: Album){
    return this.http.post<Album>(`${this.BASE_URL}/albums`, newAlbum);
  }

  updateTitle(album:Album){
    return this.http.patch(`${this.BASE_URL}/albums/${album.id}`, album);
  }

getPhotosById(id:number):Observable<Photo[]>{
  console.log(`${this.BASE_URL}/posts/${id}/photos`);
  return this.http.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
}


}
