import { Injectable }                  from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading$ = new BehaviorSubject<boolean>(false);

  public show(): void {
    this.loading$.next(true);
  }

  public hide(): void {
    this.loading$.next(false);
  }

  public getState(): Observable<boolean> {
    return this.loading$.asObservable();
  }
}
