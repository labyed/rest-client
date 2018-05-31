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

  private _person: any;
  private _delete$: EventEmitter<any>;
  private _edit$: EventEmitter<any>;

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

  get person(): any {
    return this._person;
  }

  @Input()
  set person(person: any) {
    this._person = person;
  }

  @Output('personDelete')
  get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  @Output('personEdit')
  get edit$(): EventEmitter<any> {
    return this._edit$;
  }


  ngOnInit() {
  }

  delete(person: any) {
    this._delete$.emit(person);
  }

  edit(person: any) {
    this._router.navigate(['/edit/employee',person.id]);
  }

}

