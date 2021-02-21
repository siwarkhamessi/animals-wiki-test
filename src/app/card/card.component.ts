import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card h-100" style="width: 18rem;">
      <img src="{{image}}" class="card-img-top" style="height: 50%; max-height: 188px" alt="{{name}}">
      <div class="card-body">
        <h5 class="card-title">{{name}}({{title}})</h5>
        <p class="card-text">{{text}}</p>
      </div>
    </div>`,
  styleUrls: []
})
export class CardComponent {

  @Input() name: string;
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;

}
