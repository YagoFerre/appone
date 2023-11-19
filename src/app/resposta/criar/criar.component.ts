import { Component, OnInit } from '@angular/core';
import { RespostaService } from '../resposta.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  form: FormGroup = new FormGroup({
    afirmacao: new FormControl<string | null>(null),
    justificativa: new FormControl<string | null>(null),
    resultado: new FormControl<string | null>(null),
  });

  constructor(private respostaService: RespostaService) {}

  onSubmit() {
    this.respostaService.criar(this.form.value).subscribe();
  }


  ngOnInit(): void {

  }
}
