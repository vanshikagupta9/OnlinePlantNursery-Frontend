import { Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
            <h1 class="errorMessage">oops.... Wrong Url</h1>
             `,
  styles: [`
          .errorMessage{
           margin-top: 150px;
           font-size: 170px;
           text-align: center;
          }`]
})
export class Error404Component {

}
