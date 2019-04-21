import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RegistrService} from './registr.service';
import {CommentService} from './comment.service';
import {MessageService} from './message.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistPageComponent} from './regist-page/regist-page.component';
import {CommentPageComponent} from './comment-page/comment-page.component';
import {MessagePageComponent} from './message-page/message-page.component';
import {AppRoutingModule} from './app-routing.module';
import {Service} from './service';
import {RegistActivService} from './regist-activ.service';
import {CommentActiveService} from './comment-active.service';
import {ServiceComment} from './servicecomment';

@NgModule({
  declarations: [
    AppComponent,
    RegistPageComponent,
    CommentPageComponent,
    MessagePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RegistrService, CommentService, MessageService, Service, RegistActivService, CommentActiveService, ServiceComment],
  bootstrap: [AppComponent]
})
export class AppModule {
}
