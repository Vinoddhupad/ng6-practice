import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {NgContentDemoComponent} from './ng-content-demo/ng-content-demo.component';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {NgModule} from '@angular/core';

export const appRoutes: Routes = [
  {path: 'name-editor', component: NameEditorComponent},
  {path: 'profile-editor', component: ProfileEditorComponent},
  {path: 'ng-content-demo', component: NgContentDemoComponent},
  {
    path: '',
    redirectTo: '/name-editor',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: []
})

export  class  AppRoutingModule {
}
