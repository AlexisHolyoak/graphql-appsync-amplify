import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmplifyAngularModule, AmplifyService, AmplifyModules} from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule
  ],
  providers: [{
    provide: AmplifyService,
      useFactory:  () => {
        return AmplifyModules({
          Auth
        });
      }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
