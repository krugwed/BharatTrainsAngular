import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddRoutesComponent } from './admin-dashboard/add-routes/add-routes.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { GetUsersComponent } from './admin-dashboard/get-users/get-users.component';
import { RoleGuard } from './guards/role.guard';
import { SearchComponent } from './user-dashboard/search/search.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { AddTrainsComponent } from './admin-dashboard/add-trains/add-trains.component';
import { BookingComponent } from './user-dashboard/booking/booking.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AddStationComponent } from './admin-dashboard/add-station/add-station.component';
import { MyBookingComponent } from './user-dashboard/my-booking/my-booking.component';
import { CancelTicketComponent } from './user-dashboard/cancel-ticket/cancel-ticket.component';
import { UserProfileComponent } from './user-dashboard/user-profile/user-profile.component';
import { AdminProfileComponent } from './admin-dashboard/admin-profile/admin-profile.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [

  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'admin-dashboard/add-trains', component: AddTrainsComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'admin-dashboard/add-routes', component: AddRoutesComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'admin-dashboard/get-users', component: GetUsersComponent, canActivate: [RoleGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'admin-dashboard/add-station', component: AddStationComponent, canActivate:[RoleGuard], data:{expectedRole:'ADMIN'}},
  { path: 'admin-dashboard/my-profile', component: AdminProfileComponent, canActivate:[RoleGuard], data:{expectedRole:'ADMIN'}},
  { path: 'admin-dashboard/delete-user', component: DeleteUserComponent, canActivate:[RoleGuard], data:{expectedRole:'ADMIN'}},
  { path: 'admin-dashboard/change-password', component: ChangePasswordComponent, canActivate:[RoleGuard], data:{expectedRole:'ADMIN'}},
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [RoleGuard], data: { expectedRole: 'USER' } },
  { path: 'user-dashboard/search', component: SearchComponent, canActivate: [RoleGuard], data: { expectedRole: 'USER' } },
  { path: 'user-dashboard/my-booking', component: MyBookingComponent, canActivate: [RoleGuard], data: { expectedRole: 'USER' } },
  { path: 'user-dashboard/cancel', component: CancelTicketComponent, canActivate: [RoleGuard], data: { expectedRole: 'USER' } },
  { path: 'user-dashboard/book', component: BookingComponent, canActivate: [RoleGuard], data: { expectedRole: 'USER' } },
  { path: 'user-dashboard/my-profile', component: UserProfileComponent, canActivate: [RoleGuard], data: { expectedRole: 'USER' } },
  { path: 'user-dashboard/delete-user', component: DeleteUserComponent, canActivate:[RoleGuard], data:{expectedRole:'USER'}},
  { path: 'user-dashboard/change-password', component: ChangePasswordComponent, canActivate:[RoleGuard], data:{expectedRole:'USER'}},
  { path: 'unauthorized', component: UnauthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
