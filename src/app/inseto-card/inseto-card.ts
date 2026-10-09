import { Component, OnDestroy, signal } from '@angular/core';
import { Insetos, Inseto } from '../servicos/insetos';

@Component({
  imports: [],
  selector: 'app-inseto-card',
  styleUrl: './inseto-card.css',
  templateUrl: './inseto-card.html',
})
export class InsetoCard implements OnDestroy {
  servico = new Insetos();
  insetos: Inseto[] = this.servico.getInsetos();

  insetoAtual = signal(0);
  fotoAtual = signal(0);
  mostrarInfo = signal(false);
  favoritos = signal<string[]>([]);

  timer: any;

  constructor() {
    this.iniciarTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  //trocafoto
  iniciarTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.proximaFoto(), 3000);
  }

  //volta 1 dps da ultima
  proximaFoto() {
    const total = this.getInsetoAtual().fotos.length;
    this.fotoAtual.set((this.fotoAtual() + 1) % total);
  }
  
  getInsetoAtual(): Inseto {
    return this.insetos[this.insetoAtual()];
  }

  trocarInseto(novoIndice: number) {
    this.insetoAtual.set(novoIndice);
    this.fotoAtual.set(0);
    this.iniciarTimer();
  }

  anterior() {
    if (this.insetoAtual() > 0) {
      this.trocarInseto(this.insetoAtual() - 1);
    } else {
      this.trocarInseto(this.insetos.length - 1);
    }
  }

  proximo() {
    if (this.insetoAtual() < this.insetos.length - 1) {
      this.trocarInseto(this.insetoAtual() + 1);
    } else {
      this.trocarInseto(0);
    }
  }

  toggleInfo() {
    this.mostrarInfo.set(!this.mostrarInfo());
  }

  ehFavorito(): boolean {
    return this.favoritos().includes(this.getInsetoAtual().nome);
  }

  toggleFavorito() {
    const nome = this.getInsetoAtual().nome;

    if (this.ehFavorito()) {
      this.favoritos.set(this.favoritos().filter((f) => f !== nome));
    } else {
      this.favoritos.set([...this.favoritos(), nome]);
    }
  }

  totalFavoritos(): number {
    return this.favoritos().length;
  }
}
