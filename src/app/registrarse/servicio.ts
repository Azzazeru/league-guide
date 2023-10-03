import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuario'; // Reemplaza con la URL de tu servidor JSON

  constructor(private http: HttpClient) {}

  checkUsernameExists(username: string): Observable<boolean> {
    // Realiza una solicitud HTTP para verificar si el nombre de usuario ya existe en el servidor JSON.
    return this.http.get<boolean>(`${this.apiUrl}/check-username/${username}`);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  login(username: string, password: string): Observable<any> {
    // Aquí puedes implementar la lógica de autenticación y devolver un Observable con el resultado.
    // Por ejemplo, podrías realizar una solicitud HTTP para autenticar al usuario y devolver
    // el resultado como un Observable.
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
