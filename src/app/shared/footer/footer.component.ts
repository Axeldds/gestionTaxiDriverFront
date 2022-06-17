import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    test : Date = new Date();
    
    onClick(){
        let x = document.querySelector("#Nous");
        if (x){
            x.scrollIntoView();
        }
    }
    onClick2(){
        let x = document.querySelector("#Contact");
        if (x){
            x.scrollIntoView();
        }
    }
}
