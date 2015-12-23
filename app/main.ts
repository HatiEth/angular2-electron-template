/// <reference path="typings/angular2.d.ts"/>

import 'reflect-metadata';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap'

@Component({
  selector: 'app',
  template: '<h1>My first app</h1>'
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public hero = 'Windstorm';
}


bootstrap(AppComponent)
