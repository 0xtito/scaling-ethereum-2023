import {
  Bars3BottomLeftIcon,
  BellIcon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
  Squares2X2Icon,
  CubeIcon,
  CurrencyDollarIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

export const entryPointAddress = "0x0576a174D229E3cFA37253523E645A78A0C91B57";
// export const simpleAccountFactoryAddress =
//   "0x6C583EE7f3a80cB53dDc4789B0Af1aaFf90e55F3";
// export const simpleAccountFactoryAddress =
//   "0xCe4BCd8227059ee5797b81BaFaaB9353bBB13d98";

// export const entryPointAddress = "0x0576a174D229E3cFA37253523E645A78A0C91B57";
// export const simpleAccountFactoryAddress =
//   "0x6C583EE7f3a80cB53dDc4789B0Af1aaFf90e55F3";
// 0x1053fe820b68d71b2a3ce4565b285b6bdabaaf74
export const simpleAccountFactoryAddressGoerli =
  "0x9d39667e209ff2C2982B457989b39f72151B7dC3";

export const simpleAccountFactoryAddress =
  "0x1053fe820b68d71b2a3ce4565b285b6bdabaaf74";

// export const simpleAccountFactoryAddress =
//   "0xCe4BCd8227059ee5797b81BaFaaB9353bBB13d98";
export const simpleAccountAddress =
  "0x5E0d7021bF4B79fdD44cDa03C0679a4Cc700872a";

export const assets = [
  {
    id: 1,
    name: "ETH",
    symbol:
      "https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/13c43/eth-diamond-black.png",
  },
  {
    id: 2,
    name: "BTC",
    symbol: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
  },
  {
    id: 3,
    name: "GNO",
    symbol: "https://docs.gnosischain.com/img/tokens/gno.png",
  },
];

export const mainNavigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "Dashboard", href: "#", icon: Squares2X2Icon, current: true },
  { name: "Place Orders", href: "#", icon: FolderIcon, current: false },
  { name: "Orders", href: "#", icon: CubeIcon, current: false },
  { name: "Fiat On-ramp", href: "#", icon: CurrencyDollarIcon, current: false },
];
export const userSettingsNav = [
  { name: "Settings", href: "#", icon: CogIcon, current: false },
  {
    name: "Log Out",
    href: "#",
    icon: ArrowRightOnRectangleIcon,
    current: false,
  },
];