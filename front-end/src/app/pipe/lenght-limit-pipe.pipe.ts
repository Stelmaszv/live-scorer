import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lenghtLimitPipe'
})
export class LenghtLimitPipePipe implements PipeTransform {
  public transform(string:string,limit:number): string 
  {
    if (string.length>limit){
      return this.show_string(string,limit);
    }
    return string;
  }
  private show_string(string:string,limit:number) : string
  {
    const strind_add='...'
    let strng_return='';
    for(var i = 0; i < limit; i++){
      strng_return+=string[i];
    }
    return strng_return+=strind_add;

  }
}
