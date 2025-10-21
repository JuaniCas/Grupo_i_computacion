import { Routes } from '@angular/router';
import { ErrorPage } from './pages/error-page/error-page';
import { authsessionGuard } from './guards/authsession-guard';

export const routes: Routes = [

    //{path: 'inicio_app', component: InicioApp},
    // Vista Cliente
    {path: 'inicio_app', loadComponent: () => import('./pages/inicio-app/inicio-app').then(m => m.InicioApp)},
    {path: 'iniciar_sesion', loadComponent: () => import('./pages/iniciar-sesion/iniciar-sesion').then(m => m.IniciarSesion)},
    {path: 'registro', loadComponent: () => import('./pages/registro/registro').then(m => m.Registro)},
    {path: 'pagina_principal', loadComponent: () => import('./pages/pagina-principal/pagina-principal').then(m => m.PaginaPrincipal)},
    {path: 'perfil', loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil)},
    {path: 'buscar', loadComponent: () => import('./pages/buscar/buscar').then(m => m.Buscar)},
    {path: 'carrito_actual', loadComponent: () => import('./pages/carrito-actual/carrito-actual').then(m => m.CarritoActual)},
    {path: 'carrito_historico', loadComponent: () => import('./pages/carrito-historico/carrito-historico').then(m => m.CarritoHistorico)},
    {path: 'confirmar_pedido', loadComponent: () => import('./pages/confirmar-pedido/confirmar-pedido').then(m => m.ConfirmarPedido)},
    {path: 'detalle_producto', loadComponent: () => import('./pages/detalle-producto/detalle-producto').then(m => m.DetalleProducto)},
    {path: 'editar_perfil', loadComponent: () => import('./pages/editar-perfil/editar-perfil').then(m => m.EditarPerfil)},
    {path: 'exito_perfil', loadComponent: () => import('./pages/exito-perfil/exito-perfil').then(m => m.ExitoPerfil)},
    {path: 'pedido_confirmado', loadComponent: () => import('./pages/pedido-confirmado/pedido-confirmado').then(m => m.PedidoConfirmado)},
    {path: 'resultados', loadComponent: () => import('./pages/resultados/resultados').then(m => m.Resultados)},
    {path: 'error_autenticacion', loadComponent: () => import('./pages/error-autenticacion/error-autenticacion').then(m => m.ErrorAutenticacion)},
    // Vista Empleado
    {path: 'actualizar_estado', loadComponent: () => import('./pages/vista_empleado/actualizar-estado/actualizar-estado.component').then(m => m.ActualizarEstadoComponent)},
    {path: 'bloquear_clientes', loadComponent: () => import('./pages/vista_empleado/bloquear_clientes/bloquear-clientes.component').then(m => m.BloquearClientesComponent)},
    {path: 'buscar', loadComponent: () => import('./pages/vista_empleado/buscar/buscar.component').then(m => m.BuscarComponent)},
    {path: 'cargar_pedido', loadComponent: () => import('./pages/vista_empleado/cargar-pedido/cargar-pedido').then(m => m.CargarPedidoComponent)},
    {path: 'carrito_actual', loadComponent: () => import('./pages/vista_empleado/carrito-actual/carrito-actual.component').then(m => m.CarritoActualComponent)},
    {path: 'detalle_producto', loadComponent: () => import('./pages/vista_empleado/detalle_producto/detalle_producto.component').then(m => m.DetalleProductoComponent)},
    {path: 'empleados_pedidos', loadComponent: () => import('./pages/vista_empleado/empleados-pedidos/empleados-pedidos.component').then(m => m.EmpleadosPedidosComponent)},
    {path: 'estado_pedidos', loadComponent: () => import('./pages/vista_empleado/estado-pedidos/estado-pedidos.component').then(m => m.EstadoPedidosComponent)},
    {path: 'pagina_principal_empleados', loadComponent: () => import('./pages/vista_empleado/pagina-principal-empleados/pagina-principal-empleados.component').then(m => m.PaginaPrincipalEmpleadosComponent)},
    {path: 'pedido_confirmado', loadComponent: () => import('./pages/vista_empleado/pedido-confirmado/pedido-confirmado.component').then(m => m.PedidoConfirmadoComponent)},
    {path: 'resultados', loadComponent: () => import('./pages/vista_empleado/resultados/resultados.component').then(m => m.ResultadosComponent)},
    {path: 'validar_cuentas', loadComponent: () => import('./pages/vista_empleado/validar-cuentas/validar-cuentas.component').then(m => m.ValidarCuentasComponent)},
    {path: 'verificar_stock', loadComponent: () => import('./pages/vista_empleado/verificar-stock/verificar-stock.component').then(m => m.VerificarStockComponent)},
    // Vista Admin
    {path: 'clientes', loadComponent: () => import('./pages/vista_admin/clientes/clientes').then(m => m.Clientes), canActivate: [authsessionGuard]},
    {path: 'editar_empleados', loadComponent: () => import('./pages/vista_admin/editar-empleados/editar-empleados').then(m => m.EditarEmpleados), canActivate: [authsessionGuard]},
    {path: 'editar_pedidos', loadComponent: () => import('./pages/vista_admin/editar-pedidos/editar-pedidos').then(m => m.EditarPedidos), canActivate: [authsessionGuard]},
    {path: 'editar_productos', loadComponent: () => import('./pages/vista_admin/editar-productos/editar-productos').then(m => m.EditarProductos), canActivate: [authsessionGuard]},
    {path: 'empleados', loadComponent: () => import('./pages/vista_admin/empleados/empleados').then(m => m.Empleados), canActivate: [authsessionGuard]},
    {path: 'pagina_principal_admin', loadComponent: () => import('./pages/vista_admin/pagina-principal-admin/pagina-principal-admin').then(m => m.PaginaPrincipalAdmin), canActivate: [authsessionGuard]},
    {path: 'pedidos', loadComponent: () => import('./pages/vista_admin/pedidos/pedidos').then(m => m.Pedidos), canActivate: [authsessionGuard]},
    {path: 'productos', loadComponent: () => import('./pages/vista_admin/productos/productos').then(m => m.Productos), canActivate: [authsessionGuard]},
    {path: 'promociones', loadComponent: () => import('./pages/vista_admin/promociones/promociones').then(m => m.Promociones), canActivate: [authsessionGuard]},
    {path: 'validacion_clientes', loadComponent: () => import('./pages/vista_admin/validacion-clientes/validacion-clientes').then(m => m.ValidacionClientes), canActivate: [authsessionGuard]},

    {path: 'error', component: ErrorPage},
    {path: '', redirectTo: 'inicio_app', pathMatch: 'full'},
    {path: '**', redirectTo: 'error'}

];
