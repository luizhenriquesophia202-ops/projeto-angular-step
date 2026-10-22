
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  imports: [],
  templateUrl: './exemplo.html',
  styleUrl: './exemplo.css',
})
export class Exemplo {
  nome = "Luiz";

  mudarNome() {
    this.nome = "Angular Dev";
  }
}
          