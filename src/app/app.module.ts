import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our feature model
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// our app component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TeslaBatteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
