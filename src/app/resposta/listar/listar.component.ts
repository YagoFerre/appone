import { Component, OnInit } from '@angular/core';
import { RespostaService } from '../resposta.service';
import { Resposta } from '../resposta';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  respostas: Resposta[] = [];

  constructor(private respostaService: RespostaService) {}

  onSubmit(id: number) {
    this.respostaService.excluir(id).subscribe();
    this.respostaService.listar().subscribe((dados) => this.respostas = dados);
  }

  ngOnInit(): void {
    this.respostaService.listar().subscribe((dados) => this.respostas = dados);
  }
}
