//layout
import LayoutAdmin from '../components/Layout_Admin/layoutAdmin';
import LayoutUser from '../components/Layout_User/layoutUser';

//Admin pages
import AdminPrincipal from '../pages/admin/principal/principal';
import BannerAdmin from '../pages/admin/banner/banner';
import CapacitacionAdmin from '../pages/admin/capacitacion/capacitacion';
import EmpresasAdmin from '../pages/admin/empresas/empresas';
import ServiciosAdmin from '../pages/admin/servicios/servicios';
import TestimoniosAdmin from '../pages/admin/testimonios/testimonios';

//Users pages
import Home from '../pages/users/home/home'
import Blog from '../pages/users/blog/blog'
import Capacitaciones from '../pages/users/capacitaciones/capacitaciones'
import Servicios from '../pages/users/servicios/servicios'
import QuienesSomos from '../pages/users/quienes_somos/quienes_somos'

//login
import Login from '../pages/login/login';

//other
import Error404 from '../pages/error404'

const routes = [
	{
		path: '/admin',
		component: LayoutAdmin,
		exact: false,
		routes: [
			{
				path: '/admin',
				component: AdminPrincipal,
				exact: true,
			},
			{
				path: '/admin/banner',
				component: BannerAdmin,
				exact: true,
			},
			{
				path: '/admin/capacitaciones',
				component: CapacitacionAdmin,
				exact: true,
			},
			{
				path: '/admin/empresas',
				component: EmpresasAdmin,
				exact: true,
			},
			{
				path: '/admin/servicios',
				component: ServiciosAdmin,
				exact: true,
			},
			{
				path: '/admin/testimonios',
				component: TestimoniosAdmin,
				exact: true,
			},
			{
				component: Error404
			}
		]
	},
	{
		path: '/',
		component: LayoutUser,
		exact: false,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true
			},
			{
				path: '/blog',
				component: Blog,
				exact: true
			},
			{
				path: '/capacitaciones',
				component: Capacitaciones,
				exact: true
			},
			{
				path: '/servicios',
				component: Servicios,
				exact: true
			},
			{
				path: '/quienes_somos',
				component: QuienesSomos,
				exact: true
			},
			{
				path: '/login',
				component: Login,
				exact: true
			},
			{
				component: Error404
			}
		]
	}
];

export default routes;
