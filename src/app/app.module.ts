import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home', pathMatch: 'full'},
      {path: 'home',component: TodoComponent},
      {path: 'dummy',component: DummyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }