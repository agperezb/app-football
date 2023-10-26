import { Component, inject, ViewEncapsulation } from '@angular/core';
import { LoadingService }                       from '../../services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {

  public _loading: LoadingService = inject(LoadingService);

}
