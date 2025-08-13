import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

  // eager routing
// export const routes: Routes = [
//   {
//     path: "",
//     redirectTo: "home",
//     pathMatch: 'full'
//   },
//   {
//     path: "home",
//     component : HomeComponent
//   },
//   {
//     path: "about",
//     component:AboutComponent
//   },
//   {
//     path: "contact",
//     component: ContactComponent
//   },
//   {
//     path: '**',
//     component : ErrorComponent
//   }
// ];




export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "home",
    loadComponent: () => import('./home/home.component').then(p => p.HomeComponent)
  },
    {
    path: "about",
    loadComponent: () => import('./about/about.component').then(p => p.AboutComponent)
  },
    {
    path: "contact",
    loadComponent: () => import('./contact/contact.component').then(p => p.ContactComponent)
  },
    {
    path: "details/:id/:name",
    loadComponent: () => import('./home/details/details.component').then(p => p.DetailsComponent)
  },
  {
    path: '**',
    component : ErrorComponent
  }
];



// lasy loading routing