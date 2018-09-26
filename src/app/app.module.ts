import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from './dynamic-form-question/dynamic-form-question.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ChartModule} from 'primeng/chart';
import {HttpClientModule} from '@angular/common/http';
import { ZippyComponent } from './zippy/zippy.component';
import { AsyncObservableComponent } from './async-observable/async-observable.component';
import { RoutableNavStartComponent } from './routable-nav-start/routable-nav-start.component';
import { FaInputComponent } from './fa-input/fa-input.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NgContentDemoComponent } from './ng-content-demo/ng-content-demo.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { FilterPipe } from './pipes/filter.pipe';
import {CounterComponent} from './components/counter/counter.component';
import { DomTestingComponent } from './components/dom-testing/dom-testing.component';
import { DynamicCssClassesComponent } from './components/dynamic-css-classes/dynamic-css-classes.component';
import {LanguageService} from './services/language.service';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { AsyncStreamComponent } from './components/async-stream/async-stream.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    PageNotFoundComponent,
    ZippyComponent,
    AsyncObservableComponent,
    RoutableNavStartComponent,
    FaInputComponent,
    HeaderComponent,
    CounterComponent,
    WrapperComponent,
    NgContentDemoComponent,
    ContentProjectionComponent,
    FilterPipe,
    DomTestingComponent,
    DynamicCssClassesComponent,
    InputComponent,
    OutputComponent,
    AsyncStreamComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    ChartModule,
    RouterModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
