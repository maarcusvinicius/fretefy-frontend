import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './list/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  addcadastro(data: datamodel) {
    return this.http.post<datamodel>('https://my-json-server.typicode.com/maarcusvinicius/fretefy-frontend/posts', data);
  }

  getcadastro() {
    return this.http.get<datamodel[]>('https://my-json-server.typicode.com/maarcusvinicius/fretefy-frontend/posts');
  }

  deletecadastro(id: number) {
    return this.http.delete<datamodel>('https://my-json-server.typicode.com/maarcusvinicius/fretefy-frontend/posts/'+id);
  }

  fetchdata(id: number) {
    return this.http.get<datamodel>('https://my-json-server.typicode.com/maarcusvinicius/fretefy-frontend/posts/'+id)
  }

  updatecadastro(data:datamodel, id:number) {
    return this.http.put<datamodel>('https://my-json-server.typicode.com/maarcusvinicius/fretefy-frontend/posts/'+id, data)
  }
}

