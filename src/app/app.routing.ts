import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AssessmentStatusComponent } from './assessmentstatus/index';
import { AssessmentHoldComponent } from './assessmenthold/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'option1', component: AssessmentStatusComponent },
    { path: 'option2', component: AssessmentHoldComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);