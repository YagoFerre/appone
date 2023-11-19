import { RespostaService } from './../resposta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resposta } from '../resposta';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  resposta: Resposta = {
    id: 0,
    afirmacao: '',
    justificativa: '',
    resultado: '',
    data_envio: ''
  };

  form: FormGroup = new FormGroup({
    afirmacao: new FormControl<string | null>(''),
    justificativa: new FormControl<string | null>(''),
    resultado: new FormControl<string | null>(''),
  });

  onSubmit() {
    this.route.params.subscribe((params: any) => {
      this.respostaService.atualizar(params['id'], this.form.value).subscribe((dados) => this.resposta = dados);
    })
  }

  constructor(
    private respostaService: RespostaService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.respostaService.buscarPorId(params['id']).subscribe((dados) => this.resposta = dados);
    })
  }
}
