import { Component, OnInit } from '@angular/core';

import { TwainService } from './twain.service';

import { Observable, of } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-twain',
  templateUrl: './twain.component.html',
  styleUrls: ['./twain.component.css']
})
export class TwainComponent implements OnInit {
  errorMessage: string;
  quote: Observable<string>;

  constructor(public twainService: TwainService) {}

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this.errorMessage = '';
    this.quote = this.twainService.getQuote().pipe(
      startWith('...'),
      catchError((err: any) => {
        // Wait a turn because errorMessage already set once this turn
        setTimeout(() => (this.errorMessage = err.message || err.toString()));
        return of('...'); // reset message to placeholder
      })
    );
  }
}
