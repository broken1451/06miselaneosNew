import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.scss'
})
export class NgclassComponent {

  public alert: string = 'alert-danger';
  public properties =  {
    danger: false
  }
  public loading: boolean = false;


  change(color: string) {
    this.alert = `alert-${color}`;
  }

  changeTextColor() {
    this.properties.danger = !this.properties.danger;
  }

  executeProcess() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
}
