import { Routes } from '@angular/router';
import { ErrorPage } from './pages/error-page/error-page';

export const routes: Routes = [

    //{path: 'inicio_app', component: InicioApp},
    {path: 'inicio_app', loadComponent: () => import('./pages/inicio-app/inicio-app').then(m => m.InicioApp)},
    {path: 'iniciar_sesion', loadComponent: () => import('./pages/iniciar-sesion/iniciar-sesion').then(m => m.IniciarSesion)},
    {path: 'registro', loadComponent: () => import('./pages/registro/registro').then(m => m.Registro)},
    {path: 'pagina_principal', loadComponent: () => import('./pages/pagina-principal/pagina-principal').then(m => m.PaginaPrincipal)},
    {path: 'error', component: ErrorPage},
    {path: '', redirectTo: 'inicio_app', pathMatch: 'full'},
    {path: '**', redirectTo: 'error'}

];
