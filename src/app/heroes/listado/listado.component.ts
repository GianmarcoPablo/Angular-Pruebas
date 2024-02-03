import { Component } from '@angular/core';


@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrl: './listado.component.css'
})

export class ListadoComponent {
    public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
    public heroeBorrado: string = '';

    borrarHeroe(): void {
        const heroeBorrado = this.heroes.shift();
        this.heroeBorrado = heroeBorrado || '';
    }


}
