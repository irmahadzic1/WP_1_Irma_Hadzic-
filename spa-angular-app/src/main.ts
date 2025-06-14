import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ProductsComponent } from './app/products/products.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
