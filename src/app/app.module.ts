import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HTTP_INTERCEPTORS, HttpClient,HttpClientModule } from '@angular/common/http';
import { HeaderInterceptor } from './services/header.interceptor';
import { RegisterComponent } from './pages/register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AddRoutesComponent } from './admin-dashboard/add-routes/add-routes.component';
import { AddTrainsComponent } from './admin-dashboard/add-trains/add-trains.component';
import { GetUsersComponent } from './admin-dashboard/get-users/get-users.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { SearchComponent } from './user-dashboard/search/search.component';
import { BookingComponent } from './user-dashboard/booking/booking.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AddRoutesComponent,
    AddTrainsComponent,
    GetUsersComponent,
    UserDashboardComponent,
    SearchComponent,
    BookingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
