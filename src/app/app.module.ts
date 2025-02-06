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
import { BookingComponent } from './user-dashboard/booking/booking.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AddStationComponent } from './admin-dashboard/add-station/add-station.component';
import { SearchComponent } from './user-dashboard/search/search.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { MyBookingComponent } from './user-dashboard/my-booking/my-booking.component';
import { CancelTicketComponent } from './user-dashboard/cancel-ticket/cancel-ticket.component';
import { ApiService } from './services/api.service';
import { UtlitiesService } from './services/utlities.service';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminProfileComponent } from './admin-dashboard/admin-profile/admin-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';


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
    BookingComponent,
    NavbarComponent,
    UnauthorizedComponent,
    AddStationComponent,
    SearchComponent,
    UserNavbarComponent,
    MyBookingComponent,
    CancelTicketComponent,
    UserProfileComponent,
    LogoutComponent,
    AdminProfileComponent,
    ChangePasswordComponent,
    DeleteUserComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    ApiService,
    UtlitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
