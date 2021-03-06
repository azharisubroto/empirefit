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
  perm?: string;
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
  perm?: string;
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
  permission;
  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false
  };
  constructor() { }

  defaultMenu: IMenuItem[] = [
    {
      name: "Customer Search",
      type: "link",
      tooltip: "Customer Search",
      icon: "i-Gey",
      state: "/",
      perm: "2",
    },
    {
      name: "Member Partner",
      type: "link",
      tooltip: "Member Partner",
      icon: "i-Business-Mens",
      state: "/member-partner",
      perm: "3",
    },
    {
      name: "Staff",
      type: "link",
      tooltip: "Staff",
      icon: "i-Conference",
      state: "/staff",
      perm: "4",
    },
    {
      name: "Class Participants",
      type: "link",
      tooltip: "Class Participants",
      icon: "i-Calendar",
      state: "/class-participants",
      perm: "5",
      // sub: [
      // {
      //   icon: "i-Library",
      //   name: "Class list",
      //   state: "/class-participants/class-list",
      //   type: "link",
      //   perm: "6",
      // },
      // {
      //   icon: "i-Library",
      //   name: "Class Report",
      //   state: "/class-participants/class-report",
      //   type: "link",
      //   perm: "6",
      // }
      // ]
    },
    {
      name: "Finance",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "dropDown",
      icon: "i-Financial",
      state: "/finance",
      perm: "6",
      sub: [
        {
          icon: "i-Library",
          name: "Recurring Report",
          state: "/finance/recurring-report",
          type: "link",
          perm: "6",
        },
        {
          icon: "i-Library",
          name: "Transaction Report",
          state: "/finance/transaction-report",
          type: "link",
          perm: "6",
        }
      ]
    },
    {
      name: "Master",
      description: "This data master",
      type: "dropDown",
      icon: "i-Folders",
      perm: "7",
      sub: [
        {
          name: "Users",
          type: "dropDown",
          icon: "i-Administrator",
          perm: "8",
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
          type: "link",
          perm: "9",
        },
        {
          icon: "i-Money-2",
          name: "Pricing PT",
          state: "/master/pricing-pt",
          type: "link",
          perm: "10",
        },
        {
          icon: "i-Money-2",
          name: "Pricing Non PT",
          state: "/master/pricing-non-pt",
          type: "link",
          perm: "11",
        },
        // {
        //   icon: "i-Male",
        //   name: "Coach",
        //   state: "/master/coach",
        //   type: "link"
        // },
        {
          icon: "i-Calendar",
          name: "Schedule",
          state: "/master/schedule",
          type: "link",
          perm: "12",
        },
        {
          icon: "i-Visa",
          name: "Payment Type",
          state: "/master/payment-type",
          type: "link",
          perm: "13",
        },
        {
          icon: "i-Visa",
          name: "Bank",
          state: "/master/bank",
          type: "link",
          perm: "14",
        },
        {
          icon: "i-Geek",
          name: "Member Type",
          state: "/master/member-type",
          type: "link",
          perm: "15",
        },
        {
          icon: "i-Wallet",
          name: "Benefit",
          state: "/master/benefit",
          type: "link",
          perm: "16",
        },
        {
          icon: "i-Library",
          name: "Dropin Company",
          state: "/master/dropin-company",
          type: "link",
          perm: "17",
        },
        {
          icon: "i-Library",
          name: "Health Questions",
          state: "/master/health-questions",
          type: "link",
          perm: "18",
        },
        {
          icon: "i-Library",
          name: "Positions",
          state: "/master/position",
          type: "link",
          perm: "19",
        },
        {
          icon: "i-Library",
          name: "Devices",
          state: "/master/device",
          type: "link",
          perm: "20",
        },
        {
          icon: "i-Library",
          name: "Edc",
          state: "/master/edc",
          type: "link",
          perm: "21",
        },
        {
          icon: "i-Clock-Forward",
          name: "Log",
          state: "/master/logs",
          type: "link",
          perm: "22",
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
