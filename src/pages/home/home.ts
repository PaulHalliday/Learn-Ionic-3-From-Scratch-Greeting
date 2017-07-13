import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor(private toast: ToastController) { }
  
  showGreeting(name: string) {
    this.toast.create({ 
      message: `Hello ${name}`,
      duration: 3000
    }).present(); 

    const dog = "Dog";
    const cat = "Cat";
      
    if (dog == cat) {
      console.log("do something")
    }

  }

}
