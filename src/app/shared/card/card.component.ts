import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // private property to store person value
  private _person: any;
  // private property to store delete$ value
  private _delete$: EventEmitter<any>;

  /**
   * Component constructor
   */
  constructor(private _router: Router,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'icon-mail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-mail.svg'));
    iconRegistry.addSvgIcon(
      'icon-delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-delete.svg'));
    iconRegistry.addSvgIcon(
      'icon-edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-edit.svg'));
    iconRegistry.addSvgIcon(
      'icon-phone',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icon-phone.svg'));
    this._person = {};
    this._delete$ = new EventEmitter();
  }

  /**
   * Returns private property _person
   *
   * @returns {any}
   */
  get person(): any {
    return this._person;
  }

  /**
   * Sets private property _person
   *
   * @param person
   */
  @Input()
  set person(person: any) {
    this._person = person;
  }

  /**
   * Returns private property _delete$
   *
   * @returns {EventEmitter<any>}
   */
  @Output('personDelete')
  get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to emit event to delete current person
   *
   * @param person
   */
  delete(person: any) {
    this._delete$.emit(person);
  }

  /**
   * Function to navigate to manager details
   */
  goToManagerIfExist() {
    Observable
      .of(this._person.managerId)
      .filter(_ => !!_)
      .subscribe(_ => this._router.navigate(['/person', _]));
  }
}

