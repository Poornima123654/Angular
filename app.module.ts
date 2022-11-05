import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RouterModule } from '@angular/router';
import { CustomerpanelComponent } from './customerpanel/customerpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminpanelComponent,
    CustomerpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,RouterModule,

    RouterModule.forRoot([
      {path: 'admin', component:AdminpanelComponent},
      {path: 'customer', component:CustomerpanelComponent },
      {path: '', redirectTo: '/customer', pathMatch: 'full'},

    ])



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 // {path: '', redirectTo: '/home', pathMatch: 'full' },
    //  {path: 'login', component:LoginComponent},
     // {path: 'registration', component:RegistrationComponent},
    //  {path: 'empreg/:id', component: EmployeeComponent },
     // {path: 'contact', component:ContactComponent},
    //  {path: '**', component:PagenotfoundComponent},
