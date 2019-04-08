import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService, IMenuItem, IChildItem } from '../../../../services/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Utils } from '../../../../utils';
import { AuthService } from "../../../../services/auth.service"
import { PermissionService } from "../../../../services/permission.service"

@Component({
	selector: 'app-sidebar-large',
	templateUrl: './sidebar-large.component.html',
	styleUrls: ['./sidebar-large.component.scss']
})
export class SidebarLargeComponent implements OnInit {

	selectedItem: IMenuItem;

	nav: IMenuItem[];
	sub: IChildItem[];
	user;
	role_id;
	permissions;
	menu;
	submenu;
	newMenu = [];
	newSubmenu = [];

	constructor(
		public router: Router,
		public navService: NavigationService,
		public authService: AuthService,
		public permissionService: PermissionService,
	) { }

	ngOnInit() {
		this.updateSidebar();
		// CLOSE SIDENAV ON ROUTE CHANGE
		this.router.events.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((routeChange) => {
				this.closeChildNav();
				if (Utils.isMobile()) {
					this.navService.sidebarState.sidenavOpen = false;
				}
			});

		this.authService.getUser().subscribe((data: any) => {
			this.user = data["data"];
			this.role_id = this.user.role_user["0"].id;

			this.permissionService.permission_role(this.role_id).subscribe((data: any) => {
				this.permissions = data["data"];
				this.navService.menuItems$
					.subscribe((items) => {
						this.menu = items;
					});

				this.permissions.forEach(data => {
					this.menu.forEach(item => {
						if (item.perm == 7) {
							item.sub.forEach(res => {
								if (data.permission_id == res.perm) {
									this.newSubmenu.push(res)
								}

							})
							if (data.permission_id == item.perm) {
								this.newMenu.push(item);
							}
						} else {
							if (data.permission_id == item.perm) {
								this.newMenu.push(item);
							}
						}
					})
				})

				this.nav = this.newMenu;
				this.setActiveFlag();
			})
		});

		// $.each(this.menu, function (i, item) {
		// 	$.each(this.permissions, function (i, x) {
		// 		if (this.hasmatch(x, 'permission_id', item.perm)) {
		// 			console.log(item.perm)
		// 			this.nav = item
		// 		}
		// 	})
		// })
	}

	hasmatch(array, key, value) {
		var matches = array.filter(function (element) {
			return element[key] === value;
		});

		return matches.length > 0;
	}

	selectItem(item) {
		this.navService.sidebarState.childnavOpen = true;
		this.selectedItem = item;
		this.setActiveMainItem(item);
	}
	closeChildNav() {
		this.navService.sidebarState.childnavOpen = false;
		this.setActiveFlag();
	}

	onClickChangeActiveFlag(item) {
		this.setActiveMainItem(item);
	}
	setActiveMainItem(item) {
		this.nav.forEach(item => {
			item.active = false;
		});
		item.active = true;
	}

	setActiveFlag() {
		if (window && window.location) {
			const activeRoute = window.location.hash || window.location.pathname;
			this.nav.forEach(item => {
				item.active = false;
				if (activeRoute.indexOf(item.state) !== -1) {
					this.selectedItem = item;
					item.active = true;
				}
				if (item.sub) {
					item.sub.forEach(subItem => {
						subItem.active = false;
						if (activeRoute.indexOf(subItem.state) !== -1) {
							this.selectedItem = item;
							item.active = true;
						}
						if (subItem.sub) {
							subItem.sub.forEach(subChildItem => {
								if (activeRoute.indexOf(subChildItem.state) !== -1) {
									this.selectedItem = item;
									item.active = true;
									subItem.active = true;
								}
							});
						}
					});
				}
			});
		}
	}

	updateSidebar() {
		if (Utils.isMobile()) {
			this.navService.sidebarState.sidenavOpen = false;
			this.navService.sidebarState.childnavOpen = false;
		} else {
			this.navService.sidebarState.sidenavOpen = true;
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.updateSidebar();
	}

}
