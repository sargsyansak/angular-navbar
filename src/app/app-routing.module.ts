import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegistPageComponent} from './regist-page/regist-page.component';
import {CommentPageComponent} from './comment-page/comment-page.component';
import {MessagePageComponent} from './message-page/message-page.component';
import {RegistActivService} from './regist-activ.service';
import {CommentActiveService} from './comment-active.service';

const appRoutes: Routes = [
  {path: '', component: RegistPageComponent},
  {path: 'commentPage', component: CommentPageComponent, canActivate: [RegistActivService]},
  {path: 'messagePage', component: MessagePageComponent, canActivate: [CommentActiveService]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

