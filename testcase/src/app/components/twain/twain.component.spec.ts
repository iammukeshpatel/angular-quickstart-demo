import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { TwainComponent } from './twain.component';
import { TwainService } from './twain.service';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs';

describe('TwainComponent', () => {
    let component: TwainComponent;
    let fixture: ComponentFixture<TwainComponent>;
    let testQuote: String;
    let quoteDe: DebugElement;
    let quoteEl: HTMLElement;
    let getQuoteSpy: jasmine.Spy;

    beforeEach(async(() => {
        testQuote = 'Test Quote';

        // Create a fake TwainService object with a `getQuote()` spy
        const twainService = jasmine.createSpyObj('TwainService', ['getQuote']);
        // Make the spy return a synchronous Observable with the test data
        getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));

        TestBed.configureTestingModule({
            declarations: [TwainComponent],
            providers: [
                { provide: TwainService, useValue: twainService }
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TwainComponent);
        component = fixture.componentInstance;
        quoteDe = fixture.debugElement;
        quoteEl = fixture.nativeElement.querySelector('.twain');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show quote after component initialized', () => {
        fixture.detectChanges(); // onInit()

        // sync spy result shows testQuote immediately after init
        expect(quoteEl.textContent).toBe(testQuote);
        expect(getQuoteSpy.calls.any()).toBe(true, 'getQuote called');
    });

});

