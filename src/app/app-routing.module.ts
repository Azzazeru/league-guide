import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'campeones',
    loadChildren: () => import('./campeones/campeones.module').then( m => m.CampeonesPageModule)
  },
  {
    path: 'objetos',
    loadChildren: () => import('./objetos/objetos.module').then( m => m.ObjetosPageModule)
  },
  {
    path: 'runas',
    loadChildren: () => import('./runas/runas.module').then( m => m.RunasPageModule)
  },
  {
    path: 'parches',
    loadChildren: () => import('./parches/parches.module').then( m => m.ParchesPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'modos-de-juego',
    loadChildren: () => import('./modos-de-juego/modos-de-juego.module').then( m => m.ModosDeJuegoPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'guias',
    loadChildren: () => import('./guias/guias.module').then( m => m.GuiasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'runa-precision',
    loadChildren: () => import('./runa-precision/runa-precision.module').then( m => m.RunaPrecisionPageModule)
  },
  {
    path: 'campeon-aatrox',
    loadChildren: () => import('./campeon-aatrox/campeon-aatrox.module').then( m => m.CampeonAatroxPageModule)
  },
  {
    path: 'obj-espada-doran',
    loadChildren: () => import('./obj-espada-doran/obj-espada-doran.module').then( m => m.ObjEspadaDoranPageModule)
  },
  {
    path: 'mdj-normal',
    loadChildren: () => import('./mdj-normal/mdj-normal.module').then( m => m.MdjNormalPageModule)
  },
  {
    path: 'mapa-gde',
    loadChildren: () => import('./mapa-gde/mapa-gde.module').then( m => m.MapaGdePageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'crud-campeon',
    loadChildren: () => import('./crud/crud-campeon/crud-campeon/crud-campeon.module').then( m => m.CrudCampeonPageModule)
  },
  {
    path: 'crud-agregar-campeon',
    loadChildren: () => import('./crud/crud-campeon/crud-agregar-campeon/crud-agregar-campeon.module').then( m => m.CrudAgregarCampeonPageModule)
  },
  {
    path: 'crud-listar-campeon',
    loadChildren: () => import('./crud/crud-campeon/crud-listar-campeon/crud-listar-campeon.module').then( m => m.CrudListarCampeonPageModule)
  },
  {
    path: 'crud-agregar-item',
    loadChildren: () => import('./crud/crud-item/crud-agregar-item/crud-agregar-item.module').then( m => m.CrudAgregarItemPageModule)
  },
  {
    path: 'crud-listar-item',
    loadChildren: () => import('./crud/crud-item/crud-listar-item/crud-listar-item.module').then( m => m.CrudListarItemPageModule)
  },

  {
    path: 'crud-actualizar-item',
    loadChildren: () => import('./crud/crud-item/crud-actualizar-item/crud-actualizar-item.module').then( m => m.CrudActualizarItemPageModule)
  },
  {
    path: 'crud-agregar-mapa',
    loadChildren: () => import('./crud/crud-mapa/crud-agregar-mapa/crud-agregar-mapa.module').then( m => m.CrudAgregarMapaPageModule)
  },
  {
    path: 'crud-eliminar-mapa',
    loadChildren: () => import('./crud/crud-mapa/crud-eliminar-mapa/crud-eliminar-mapa.module').then( m => m.CrudEliminarMapaPageModule)
  },
  {
    path: 'crud-modificar-mapa',
    loadChildren: () => import('./crud/crud-mapa/crud-modificar-mapa/crud-modificar-mapa.module').then( m => m.CrudModificarMapaPageModule)
  },
  {
    path: 'crud-listar-mapa',
    loadChildren: () => import('./crud/crud-mapa/crud-listar-mapa/crud-listar-mapa.module').then( m => m.CrudListarMapaPageModule)
  },
  {
    path: 'crud-mapa',
    loadChildren: () => import('./crud/crud-mapa/crud-mapa/crud-mapa.module').then( m => m.CrudMapaPageModule)
  },
  {
    path: 'crud-modo',
    loadChildren: () => import('./crud/crud-modo/crud-modo/crud-modo.module').then( m => m.CrudModoPageModule)
  },
  {
    path: 'crud-agregar-modo',
    loadChildren: () => import('./crud/crud-modo/crud-agregar-modo/crud-agregar-modo.module').then( m => m.CrudAgregarModoPageModule)
  },
  {
    path: 'crud-eliminar-modo',
    loadChildren: () => import('./crud/crud-modo/crud-eliminar-modo/crud-eliminar-modo.module').then( m => m.CrudEliminarModoPageModule)
  },
  {
    path: 'crud-modificar-modo',
    loadChildren: () => import('./crud/crud-modo/crud-modificar-modo/crud-modificar-modo.module').then( m => m.CrudModificarModoPageModule)
  },
  {
    path: 'crud-listar-modo',
    loadChildren: () => import('./crud/crud-modo/crud-listar-modo/crud-listar-modo.module').then( m => m.CrudListarModoPageModule)
  },
  {
    path: 'crud-item',
    loadChildren: () => import('./crud/crud-item/crud-item/crud-item.module').then( m => m.CrudItemPageModule)
  },
  {
    path: 'crud-actualizar-campeon/:id',
    loadChildren: () => import('./crud/crud-campeon/crud-actualizar-campeon/crud-actualizar-campeon.module').then( m => m.CrudActualizarCampeonPageModule)
  },
  {
    path: 'crud-leer-campeon/:id',
    loadChildren: () => import('./crud/crud-campeon/crud-leer-campeon/crud-leer-campeon.module').then( m => m.CrudLeerCampeonPageModule)
  },
  {
    path: 'crud-leer-item',
    loadChildren: () => import('./crud/crud-item/crud-leer-item/crud-leer-item.module').then( m => m.CrudLeerItemPageModule)
  },
  {
    path: 'crud-leer-mapa',
    loadChildren: () => import('./crud/crud-mapa/crud-leer-mapa/crud-leer-mapa.module').then( m => m.CrudLeerMapaPageModule)
  },
  {
    path: 'crud-leer-modo',
    loadChildren: () => import('./crud/crud-modo/crud-leer-modo/crud-leer-modo.module').then( m => m.CrudLeerModoPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./crud/crud-usuario/add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'list-usuario',
    loadChildren: () => import('./crud/crud-usuario/list-usuario/list-usuario.module').then( m => m.ListUsuarioPageModule)
  },
  {
    path: 'detail-usuario/:id',
    loadChildren: () => import('./crud/crud-usuario/detail-usuario/detail-usuario.module').then( m => m.DetailUsuarioPageModule)
  },
  {
    path: 'edit-usuario/:id',
    loadChildren: () => import('./crud/crud-usuario/edit-usuario/edit-usuario.module').then( m => m.EditUsuarioPageModule)
  },
  {
    path: 'all-usuario',
    loadChildren: () => import('./crud/crud-usuario/all-usuario/all-usuario.module').then( m => m.AllUsuarioPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./crud/crud-usuario/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'noticia-add',
    loadChildren: () => import('./crud/noticia/noticia-add/noticia-add.module').then( m => m.NoticiaAddPageModule)
  },
  {
    path: 'noticia-list',
    loadChildren: () => import('./crud/noticia/noticia-list/noticia-list.module').then( m => m.NoticiaListPageModule)
  },
  {
    path: 'noticia-detail/:id',
    loadChildren: () => import('./crud/noticia/noticia-detail/noticia-detail.module').then( m => m.NoticiaDetailPageModule)
  },
  {
    path: 'noticia-edit/:id',
    loadChildren: () => import('./crud/noticia/noticia-edit/noticia-edit.module').then( m => m.NoticiaEditPageModule)
  },
  {
    path: 'noticia-all',
    loadChildren: () => import('./crud/noticia/noticia-all/noticia-all.module').then( m => m.NoticiaAllPageModule)
  },
  {
    path: 'campeon-detail/:id',
    loadChildren: () => import('./crud/crud-campeon/campeon-detail/campeon-detail.module').then( m => m.CampeonDetailPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
