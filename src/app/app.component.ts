import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-fileupload-demo';

  upload(event: any): void {
    alert(JSON.stringify(event, null, 2));
  }
}
