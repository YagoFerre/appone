import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resposta } from './resposta';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  private readonly URL: string = 'http://localhost:3000/resposta';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Resposta[]>(this.URL);
  }

  criar(resposta: Resposta) {
    return this.http.post<Resposta>(this.URL, resposta);
  }

  atualizar(id: number, resposta: Resposta) {
    return this.http.put<Resposta>(`http://localhost:3000/resposta/${id}`, resposta);
  }

  buscarPorId(id: number) {
    return this.http.get<Resposta>(`http://localhost:3000/resposta/${id}`)
  }

  excluir(id: number) {
    return this.http.delete(`http://localhost:3000/resposta/${id}`)
  }
}
