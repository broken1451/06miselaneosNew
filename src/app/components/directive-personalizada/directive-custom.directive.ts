import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDirectiveCustom]'
})
export class DirectiveCustomDirective {

  // @Input('appDirectiveCustom') nuevoColor!: string; 
  @Input({ alias: 'appDirectiveCustom'}) nuevoColor!: string; 
  @Input({ alias: 'appDirectiveCustom2'}) nuevoColor2!: string; 

  constructor(private el: ElementRef) {
    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = 'yellow'; // Cambia el color de fondo del elemento que tenga la directiva
  }
  
  
  /**
   * Evento que se dispara cuando el mouse entra en el elemento.
   * Cambia el color de fondo del elemento que tiene la directiva a verde.
   */
  @HostListener('mouseenter') mouseEntro() {
    console.log('El mouse entro', this.nuevoColor2);
    this.cambiarColor(this.nuevoColor || 'red', this.nuevoColor2 );
    // this.el.nativeElement.style.backgroundColor = 'green'; // Cambia el color de fondo del elemento que tenga la directiva
  }

    /**
   * Evento que se dispara cuando el mouse entra en el elemento.
   * Cambia el color de fondo del elemento que tiene la directiva a verde.
   */
  @HostListener('mouseleave') mouseSalio() {
    console.log('El mouse salio');
    this.cambiarColor(null, null);
    // this.el.nativeElement.style.backgroundColor = null; // Cambia el color de fondo del elemento que tenga la directiva
  }


  /**
   * Cambia el color de fondo del elemento que tenga la directiva.
   * @param color El color que se utilizará como fondo. Puede ser una cadena de texto que represente un color válido o null para eliminar el color de fondo.
   */
  private cambiarColor(color: string | null, color2?: string | null) {
    this.el.nativeElement.style.color = color2; // Cambia el color de fondo del elemento que tenga la directiva
    this.el.nativeElement.style.backgroundColor = color; // Cambia el color de fondo del elemento que tenga la directiva
  }

}
