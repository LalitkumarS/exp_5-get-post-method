export class AppComponent {
 title = 'first_app';
 sum:number=0;
 add(val1:string,val2:string)
 {
 this.sum=parseInt(val1)+parseInt(val2);
 }
}