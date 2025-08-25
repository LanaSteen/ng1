import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {




    count = signal(0);

    up(){
     
      this.count.update(val => val+1)
    }

    down(){
       this.count.update(val => val-1)
    }

    reset(){
      this.count.set(0)
    }



}
