import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private HttpClient: HttpClient) { }

  getAllPosts(): Promise<any[]> {
    return this.HttpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getPost(pId): Promise<any[]> {
    return this.HttpClient.get<any[]>(`${this.baseUrl}/${pId}`).toPromise();
  }

  usersLoged(): Promise<any[]> {
    return this.HttpClient.get<any[]>('https://reqres.in/api/login​').toPromise();
  }
}
