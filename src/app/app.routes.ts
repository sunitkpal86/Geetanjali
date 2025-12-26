import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { ProductList } from './components/product-list/product-list';
import { Gallery } from './components/gallery/gallery';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'services', component: Services },
    { path: 'product-list', component: ProductList },
    { path: 'gallery', component: Gallery },
    { path: 'contact', component: Contact },
];
