import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { RespostaComponent } from './resposta.component';
import { CriarComponent } from './criar/criar.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { routing } from './resposta.routing';

@NgModule({
  declarations: [
    RespostaComponent,
    CriarComponent,
    ListarComponent,
    EditarComponent
  ],
  exports: [
    RespostaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class RespostaModule { }
