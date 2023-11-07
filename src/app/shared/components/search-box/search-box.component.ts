import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  private debouncer: Subject<string> = new Subject<string>()

  private debouncerSuscribe?: Subscription;

  @Input()
  public placeholder: string = "";
  
  @Input()
  public initialValue: string = "";

  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSuscribe = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscribe?.unsubscribe()
  };

  emitValue(value: string): void {
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }
}
