import { Component } from '@angular/core';

@Component({
  selector: 'invalidid',
  template: `
            <h1 class="errorMessage">please... enter vaild Id </h1>
             `,
  styles: [`
          .errorMessage{
           margin-top: 150px;
           font-size: 170px;
           text-align: center;
          }`]
})
export class InvalidIdComponent {

}
