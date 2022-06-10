import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appSortparams]'
})
export class SortparamsDirective {

  @Output() param:EventEmitter<any>=new EventEmitter();
  constructor(private element:ElementRef) { }
  
  @HostListener('click') onClickIcon(){
  this.selectSort(this.element.nativeElement.id)
  }
  
  selectSort(id){
  switch(id){
    case "idAsc":
  this.param.emit({dir:"asc",col:"age",typ:"number"})
  break;
  case "noteAsc":
  this.param.emit({dir:"asc",col:"age",typ:"number"})
  break;
  case "titreAsc":
  this.param.emit({dir:"asc",col:"age",typ:"number"})
  break;
  case "commentaireAsc":
  this.param.emit({dir:"asc",col:"age",typ:"number"})
  break;
  case "idDesc":
  this.param.emit({dir:"desc",col:"age",typ:"number"})
  break;
  case "noteDesc":
  this.param.emit({dir:"desc",col:"age",typ:"number"})
  break;
  case "titreDesc":
  this.param.emit({dir:"desc",col:"age",typ:"number"})
  break;
  case "commentaireDesc":
  this.param.emit({dir:"desc",col:"age",typ:"number"})
  break;
  }}
}
