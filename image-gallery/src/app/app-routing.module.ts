import { NgModule }	from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';
import { LoginComponent }	from './components/login/login.component';
import { GalleryComponent }	from './components/gallery/gallery.component'; 

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'gallery', component: GalleryComponent }
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}