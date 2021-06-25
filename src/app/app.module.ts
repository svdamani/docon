import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DummyService } from './dummy.service';

@NgModule({
  imports: [BrowserModule],
  providers: [DummyService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }