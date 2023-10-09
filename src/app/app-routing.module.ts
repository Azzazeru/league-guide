import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
<<<<<<< HEAD
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
    path: 'crud-eliminar-item',
    loadChildren: () => import('./crud/crud-item/crud-eliminar-item/crud-eliminar-item.module').then( m => m.CrudEliminarItemPageModule)
  },
  {
    path: 'crud-modificar-item',
    loadChildren: () => import('./crud/crud-item/crud-modificar-item/crud-modificar-item.module').then( m => m.CrudModificarItemPageModule)
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
    loadChildren: () => import('./crud/crud-mapa/crud-modificar-mapa/crud-modificar-mapa.module').then( m => m.CrudActualizarMapaPageModule)
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
=======
=======
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be
    {
        path: '',
        redirectTo: 'folder/inbox',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
    },
    {
        path: 'campeones',
        loadChildren: () => import('./campeones/campeones.module').then(m => m.CampeonesPageModule)
    },
    {
        path: 'objetos',
        loadChildren: () => import('./objetos/objetos.module').then(m => m.ObjetosPageModule)
    },
    {
        path: 'runas',
        loadChildren: () => import('./runas/runas.module').then(m => m.RunasPageModule)
    },
    {
        path: 'parches',
        loadChildren: () => import('./parches/parches.module').then(m => m.ParchesPageModule)
    },
    {
        path: 'noticias',
        loadChildren: () => import('./noticias/noticias.module').then(m => m.NoticiasPageModule)
    },
    {
        path: 'modos-de-juego',
        loadChildren: () => import('./modos-de-juego/modos-de-juego.module').then(m => m.ModosDeJuegoPageModule)
    },
    {
        path: 'mapas',
        loadChildren: () => import('./mapas/mapas.module').then(m => m.MapasPageModule)
    },
    {
        path: 'guias',
        loadChildren: () => import('./guias/guias.module').then(m => m.GuiasPageModule)
    },
    {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
    },
    {
        path: 'runa-precision',
        loadChildren: () => import('./runa-precision/runa-precision.module').then(m => m.RunaPrecisionPageModule)
    },
    {
        path: 'campeon-aatrox',
        loadChildren: () => import('./campeon-aatrox/campeon-aatrox.module').then(m => m.CampeonAatroxPageModule)
    },
    {
        path: 'obj-espada-doran',
        loadChildren: () => import('./obj-espada-doran/obj-espada-doran.module').then(m => m.ObjEspadaDoranPageModule)
    },
    {
        path: 'mdj-normal',
        loadChildren: () => import('./mdj-normal/mdj-normal.module').then(m => m.MdjNormalPageModule)
    },
    {
        path: 'mapa-gde',
        loadChildren: () => import('./mapa-gde/mapa-gde.module').then(m => m.MapaGdePageModule)
    },
    {
        path: 'noticia-add',
        loadChildren: () => import('./crud/noticia/noticia-add/noticia-add.module').then(m => m.NoticiaAddPageModule)
    },
    {
        path: 'noticia-list',
        loadChildren: () => import('./crud/noticia/noticia-list/noticia-list.module').then(m => m.NoticiaListPageModule)
    },
    {
        path: 'noticia-detail/:id',
        loadChildren: () => import('./crud/noticia/noticia-detail/noticia-detail.module').then(m => m.NoticiaDetailPageModule)
    },
    {
        path: 'noticia-edit/:id',
        loadChildren: () => import('./crud/noticia/noticia-edit/noticia-edit.module').then(m => m.NoticiaEditPageModule)
    },
    {
        path: 'noticia-all',
        loadChildren: () => import('./crud/noticia/noticia-all/noticia-all.module').then(m => m.NoticiaAllPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./acceder/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./acceder/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'campeon-add',
        loadChildren: () => import('./crud/campeon/campeon-add/campeon-add.module').then(m => m.CampeonAddPageModule)
    },
    {
        path: 'campeon-detail/:id',
        loadChildren: () => import('./crud/campeon/campeon-detail/campeon-detail.module').then(m => m.CampeonDetailPageModule)
    },
    {
        path: 'campeon-all',
        loadChildren: () => import('./crud/campeon/campeon-all/campeon-all.module').then(m => m.CampeonAllPageModule)
    },
    {
        path: 'campeon-list',
        loadChildren: () => import('./crud/campeon/campeon-list/campeon-list.module').then(m => m.CampeonListPageModule)
    },
    {
        path: 'campeon-edit/:id',
        loadChildren: () => import('./crud/campeon/campeon-edit/campeon-edit.module').then(m => m.CampeonEditPageModule)
    },
    {
        path: 'modo-add',
        loadChildren: () => import('./crud/modo/modo-add/modo-add.module').then(m => m.ModoAddPageModule)
    },
    {
        path: 'modo-list',
        loadChildren: () => import('./crud/modo/modo-list/modo-list.module').then(m => m.ModoListPageModule)
    },
    {
        path: 'modo-detail/:id',
        loadChildren: () => import('./crud/modo/modo-detail/modo-detail.module').then(m => m.ModoDetailPageModule)
    },
    {
        path: 'modo-edit/:id',
        loadChildren: () => import('./crud/modo/modo-edit/modo-edit.module').then(m => m.ModoEditPageModule)
    },
    {
        path: 'modo-all',
        loadChildren: () => import('./crud/modo/modo-all/modo-all.module').then(m => m.ModoAllPageModule)
    },
    {
        path: 'mapa-add',
        loadChildren: () => import('./crud/mapa/mapa-add/mapa-add.module').then(m => m.MapaAddPageModule)
    },
    {
        path: 'mapa-list',
        loadChildren: () => import('./crud/mapa/mapa-list/mapa-list.module').then(m => m.MapaListPageModule)
    },
    {
        path: 'mapa-detail/:id',
        loadChildren: () => import('./crud/mapa/mapa-detail/mapa-detail.module').then(m => m.MapaDetailPageModule)
    },
    {
        path: 'mapa-edit/:id',
        loadChildren: () => import('./crud/mapa/mapa-edit/mapa-edit.module').then(m => m.MapaEditPageModule)
    },
    {
        path: 'mapa-all',
        loadChildren: () => import('./crud/mapa/mapa-all/mapa-all.module').then(m => m.MapaAllPageModule)
    },
    {
        path: 'item-add',
        loadChildren: () => import('./crud/item/item-add/item-add.module').then(m => m.ItemAddPageModule)
    },
    {
        path: 'item-list',
        loadChildren: () => import('./crud/item/item-list/item-list.module').then(m => m.ItemListPageModule)
    },
    {
        path: 'item-all',
        loadChildren: () => import('./crud/item/item-all/item-all.module').then(m => m.ItemAllPageModule)
    },
    {
        path: 'item-detail/:id',
        loadChildren: () => import('./crud/item/item-detail/item-detail.module').then(m => m.ItemDetailPageModule)
    },
    {
        path: 'item-edit/:id',
        loadChildren: () => import('./crud/item/item-edit/item-edit.module').then(m => m.ItemEditPageModule)
    },
    {
        path: 'habilidad-campeon-add',
        loadChildren: () => import('./crud/habilidadCampeon/habilidad-campeon-add/habilidad-campeon-add.module').then(m => m.HabilidadCampeonAddPageModule)
    },
    {
        path: 'habilidad-campeon-list',
        loadChildren: () => import('./crud/habilidadCampeon/habilidad-campeon-list/habilidad-campeon-list.module').then(m => m.HabilidadCampeonListPageModule)
    },
    {
        path: 'habilidad-campeon-detail/:id',
        loadChildren: () => import('./crud/habilidadCampeon/habilidad-campeon-detail/habilidad-campeon-detail.module').then(m => m.HabilidadCampeonDetailPageModule)
    },
    {
        path: 'habilidad-campeon-all',
        loadChildren: () => import('./crud/habilidadCampeon/habilidad-campeon-all/habilidad-campeon-all.module').then(m => m.HabilidadCampeonAllPageModule)
    },
    {
        path: 'division-add',
        loadChildren: () => import('./crud/division/division-add/division-add.module').then(m => m.DivisionAddPageModule)
    },
    {
        path: 'division-list',
        loadChildren: () => import('./crud/division/division-list/division-list.module').then(m => m.DivisionListPageModule)
    },
    {
        path: 'division-detail/:id',
        loadChildren: () => import('./crud/division/division-detail/division-detail.module').then(m => m.DivisionDetailPageModule)
    },
    {
        path: 'division-edit/:id',
        loadChildren: () => import('./crud/division/division-edit/division-edit.module').then(m => m.DivisionEditPageModule)
    },
    {
        path: 'division-all',
        loadChildren: () => import('./crud/division/division-all/division-all.module').then(m => m.DivisionAllPageModule)
    },
    {
        path: 'runa-add',
        loadChildren: () => import('./crud/runa/runa-add/runa-add.module').then(m => m.RunaAddPageModule)
    },
    {
        path: 'runa-list',
        loadChildren: () => import('./crud/runa/runa-list/runa-list.module').then(m => m.RunaListPageModule)
    },
    {
        path: 'runa-detail/:id',
        loadChildren: () => import('./crud/runa/runa-detail/runa-detail.module').then(m => m.RunaDetailPageModule)
    },
    {
        path: 'runa-edit/:id',
        loadChildren: () => import('./crud/runa/runa-edit/runa-edit.module').then(m => m.RunaEditPageModule)
    },
    {
        path: 'runa-all',
        loadChildren: () => import('./crud/runa/runa-all/runa-all.module').then(m => m.RunaAllPageModule)
    },
    {
        path: 'drake-add',
        loadChildren: () => import('./crud/drake/drake-add/drake-add.module').then(m => m.DrakeAddPageModule)
    },
    {
        path: 'drake-list',
        loadChildren: () => import('./crud/drake/drake-list/drake-list.module').then(m => m.DrakeListPageModule)
    },
    {
        path: 'drake-detail/:id',
        loadChildren: () => import('./crud/drake/drake-detail/drake-detail.module').then(m => m.DrakeDetailPageModule)
    },
    {
        path: 'drake-edit/:id',
        loadChildren: () => import('./crud/drake/drake-edit/drake-edit.module').then(m => m.DrakeEditPageModule)
    },
    {
        path: 'drake-all',
        loadChildren: () => import('./crud/drake/drake-all/drake-all.module').then(m => m.DrakeAllPageModule)
    },
    {
        path: 'skin-campeon-add',
        loadChildren: () => import('./crud/skinCampeon/skin-campeon-add/skin-campeon-add.module').then(m => m.SkinCampeonAddPageModule)
    },
    {
        path: 'skin-campeon-list',
        loadChildren: () => import('./crud/skinCampeon/skin-campeon-list/skin-campeon-list.module').then(m => m.SkinCampeonListPageModule)
    },
    {
        path: 'skin-campeon-detail/:id',
        loadChildren: () => import('./crud/skinCampeon/skin-campeon-detail/skin-campeon-detail.module').then(m => m.SkinCampeonDetailPageModule)
    },
    {
        path: 'skin-campeon-edit/:id',
        loadChildren: () => import('./crud/skinCampeon/skin-campeon-edit/skin-campeon-edit.module').then(m => m.SkinCampeonEditPageModule)
    },
    {
        path: 'skin-campeon-all',
        loadChildren: () => import('./crud/skinCampeon/skin-campeon-all/skin-campeon-all.module').then(m => m.SkinCampeonAllPageModule)
    },
    {
        path: 'habilidad-campeon-edit/:id',
        loadChildren: () => import('./crud/habilidadCampeon/habilidad-campeon-edit/habilidad-campeon-edit.module').then(m => m.HabilidadCampeonEditPageModule)
    },
    {
        path: 'botin-add',
        loadChildren: () => import('./crud/botin/botin-add/botin-add.module').then(m => m.BotinAddPageModule)
    },
    {
        path: 'botin-list',
        loadChildren: () => import('./crud/botin/botin-list/botin-list.module').then(m => m.BotinListPageModule)
    },
    {
        path: 'botin-detail/:id',
        loadChildren: () => import('./crud/botin/botin-detail/botin-detail.module').then(m => m.BotinDetailPageModule)
    },
    {
        path: 'botin-edit/:id',
        loadChildren: () => import('./crud/botin/botin-edit/botin-edit.module').then(m => m.BotinEditPageModule)
    },
    {
        path: 'botin-all',
        loadChildren: () => import('./crud/botin/botin-all/botin-all.module').then(m => m.BotinAllPageModule)
    },
    {
        path: 'escencia-add',
        loadChildren: () => import('./crud/escencia/escencia-add/escencia-add.module').then(m => m.EscenciaAddPageModule)
    },
    {
        path: 'escencia-list',
        loadChildren: () => import('./crud/escencia/escencia-list/escencia-list.module').then(m => m.EscenciaListPageModule)
    },
    {
        path: 'escencia-detail/:id',
        loadChildren: () => import('./crud/escencia/escencia-detail/escencia-detail.module').then(m => m.EscenciaDetailPageModule)
    },
    {
        path: 'escencia-edit/:id',
        loadChildren: () => import('./crud/escencia/escencia-edit/escencia-edit.module').then(m => m.EscenciaEditPageModule)
    },
    {
        path: 'escencia-all',
        loadChildren: () => import('./crud/escencia/escencia-all/escencia-all.module').then(m => m.EscenciaAllPageModule)
    },
    {
        path: 'hechizo-add',
        loadChildren: () => import('./crud/hechizo/hechizo-add/hechizo-add.module').then(m => m.HechizoAddPageModule)
    },
    {
        path: 'hechizo-list',
        loadChildren: () => import('./crud/hechizo/hechizo-list/hechizo-list.module').then(m => m.HechizoListPageModule)
    },
    {
        path: 'hechizo-detail/:id',
        loadChildren: () => import('./crud/hechizo/hechizo-detail/hechizo-detail.module').then(m => m.HechizoDetailPageModule)
    },
    {
        path: 'hechizo-edit/:id',
        loadChildren: () => import('./crud/hechizo/hechizo-edit/hechizo-edit.module').then(m => m.HechizoEditPageModule)
    },
    {
        path: 'hechizo-all',
        loadChildren: () => import('./crud/hechizo/hechizo-all/hechizo-all.module').then(m => m.HechizoAllPageModule)
    },
    {
        path: 'monstruo-jg-add',
        loadChildren: () => import('./crud/monstruoJg/monstruo-jg-add/monstruo-jg-add.module').then(m => m.MonstruoJgAddPageModule)
    },
    {
        path: 'monstruo-jg-list',
        loadChildren: () => import('./crud/monstruoJg/monstruo-jg-list/monstruo-jg-list.module').then(m => m.MonstruoJgListPageModule)
    },
    {
        path: 'monstruo-jg-detail/:id',
        loadChildren: () => import('./crud/monstruoJg/monstruo-jg-detail/monstruo-jg-detail.module').then(m => m.MonstruoJgDetailPageModule)
    },
    {
        path: 'monstruo-jg-edit/:id',
        loadChildren: () => import('./crud/monstruoJg/monstruo-jg-edit/monstruo-jg-edit.module').then(m => m.MonstruoJgEditPageModule)
    },
    {
        path: 'monstruo-jg-all',
        loadChildren: () => import('./crud/monstruoJg/monstruo-jg-all/monstruo-jg-all.module').then(m => m.MonstruoJgAllPageModule)
    },
    {
        path: 'baratija-vision-add',
        loadChildren: () => import('./crud/baratijaVision/baratija-vision-add/baratija-vision-add.module').then(m => m.BaratijaVisionAddPageModule)
    },
    {
        path: 'baratija-vision-list',
        loadChildren: () => import('./crud/baratijaVision/baratija-vision-list/baratija-vision-list.module').then(m => m.BaratijaVisionListPageModule)
    },
    {
        path: 'baratija-vision-detail/:id',
        loadChildren: () => import('./crud/baratijaVision/baratija-vision-detail/baratija-vision-detail.module').then(m => m.BaratijaVisionDetailPageModule)
    },
    {
        path: 'baratija-vision-edit/:id',
        loadChildren: () => import('./crud/baratijaVision/baratija-vision-edit/baratija-vision-edit.module').then(m => m.BaratijaVisionEditPageModule)
    },
    {
        path: 'baratija-vision-all',
        loadChildren: () => import('./crud/baratijaVision/baratija-vision-all/baratija-vision-all.module').then(m => m.BaratijaVisionAllPageModule)
    },
    {
        path: 'usuario-add',
        loadChildren: () => import('./crud/usuario/usuario-add/usuario-add.module').then(m => m.UsuarioAddPageModule)
    },
    {
        path: 'usuario-list',
        loadChildren: () => import('./crud/usuario/usuario-list/usuario-list.module').then(m => m.UsuarioListPageModule)
    },
    {
        path: 'usuario-detail/:id',
        loadChildren: () => import('./crud/usuario/usuario-detail/usuario-detail.module').then(m => m.UsuarioDetailPageModule)
    },
    {
        path: 'usuario-edit/:id',
        loadChildren: () => import('./crud/usuario/usuario-edit/usuario-edit.module').then(m => m.UsuarioEditPageModule)
    },
    {
        path: 'usuario-all',
        loadChildren: () => import('./crud/usuario/usuario-all/usuario-all.module').then(m => m.UsuarioAllPageModule)
    }



<<<<<<< HEAD
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be
=======
>>>>>>> 287640de44fb8cc38213e56632fc74cfee5d00be


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
