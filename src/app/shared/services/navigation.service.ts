import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IMenuItem {
  id?: string;
  title?: string;
  description?: string;
  type: string; // Possible values: link/dropDown/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  active?: boolean;
}
export interface IChildItem {
  id?: string;
  parentId?: string;
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
  active?: boolean;
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false
  };
  constructor() {}

  defaultMenu: IMenuItem[] = [
    {
      name: "Member",
      type: "link",
      tooltip: "Member",
      icon: "i-Gey",
      state: "/"
    },
    {
      name: "Member Partner",
      type: "link",
      tooltip: "Member Partner",
      icon: "i-Business-Mens",
      state: "/member-partner"
    },
    {
      name: "Staff",
      description: "This is staff menu.",
      type: "dropDown",
      icon: "i-Conference",
      sub: [
        {
          icon: "i-Find-User",
          name: "List",
          state: "/staff/list",
          type: "link"
        },
        {
          icon: "i-Add-User",
          name: "Registration",
          state: "/staff/registration",
          type: "link"
        }
      ]
    },
    {
      name: "Schedules",
      type: "link",
      tooltip: "Schedules",
      icon: "i-Calendar",
      state: "/schedule"
    },
    {
      name: "Finance",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "dropDown",
      icon: "i-Financial",
      sub: [
        {
          icon: "i-File-Horizontal-Text",
          name: "Member List",
          state: "/finance/member-list",
          type: "link"
        },
        {
          icon: "i-Management",
          name: "Transactions",
          state: "/finance/transaction-list",
          type: "link"
        },
        {
          icon: "i-File-Clipboard-File--Text",
          name: "Report",
          state: "/finance/report",
          type: "link"
        }
      ]
    },
    {
      name: "Master",
      description: "This data master",
      type: "dropDown",
      icon: "i-Folders",
      sub: [
        {
          name: "Users",
          type: "dropDown",
          icon: "i-Administrator",
          sub: [
            {
              icon: "i-File-Horizontal-Text",
              name: "User List",
              state: "/master/user",
              type: "link"
            },
            {
              icon: "i-Checked-User",
              name: "Role & Permission",
              state: "/master/role",
              type: "link"
            },
            {
              icon: "i-Lock-User",
              name: "Permission",
              state: "/master/permission",
              type: "link"
            }
          ]
        },
        {
          icon: "i-Library",
          name: "Branch",
          state: "/master/branch",
          type: "link"
        },
        {
          icon: "i-Male-21",
          name: "Personal Trainer",
          state: "/master/personal-trainer",
          type: "link"
        },
        {
          icon: "i-Male",
          name: "Instructure",
          state: "/master/instructure",
          type: "link"
        },
        {
          icon: "i-Calendar",
          name: "Schedule",
          state: "/master/schedule",
          type: "link"
        },
        {
          icon: "i-Visa",
          name: "Payment Type",
          state: "/master/payment-type",
          type: "link"
        },
        {
          icon: "i-Visa",
          name: "Bank",
          state: "/master/bank",
          type: "link"
        },
        {
          icon: "i-Wallet",
          name: "Package",
          state: "/master/package",
          type: "link"
        },
        {
          icon: "i-Geek",
          name: "Member Type",
          state: "/master/member-type",
          type: "link"
        },
        {
          icon: "i-Money-2",
          name: "Price",
          state: "/master/price",
          type: "link"
        },
        // {
        //   icon: "i-Money-2",
        //   name: "Price Personal Trainer",
        //   state: "/master/price-pt",
        //   type: "link"
        // },
        {
          icon: "i-Wallet",
          name: "Benefit",
          state: "/master/benefit",
          type: "link"
        },
        {
          icon: "i-Wallet",
          name: "Club Benefit",
          state: "/master/club-benefit",
          type: "link"
        },
        {
          icon: "i-Double-Tap",
          name: "Dropin Type",
          state: "/master/dropin-type",
          type: "link"
        },
        {
          icon: "i-Library",
          name: "Dropin Company",
          state: "/master/dropin-company",
          type: "link"
        },
        {
          icon: "i-Library",
          name: "Health Questions",
          state: "/master/health-questions",
          type: "link"
        }
      ]
    }
  ];

  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // You can customize this method to supply different menu for
  // different user type.
  // publishNavigationChange(menuType: string) {
  //   switch (userType) {
  //     case 'admin':
  //       this.menuItems.next(this.adminMenu);
  //       break;
  //     case 'user':
  //       this.menuItems.next(this.userMenu);
  //       break;
  //     default:
  //       this.menuItems.next(this.defaultMenu);
  //   }
  // }
}
