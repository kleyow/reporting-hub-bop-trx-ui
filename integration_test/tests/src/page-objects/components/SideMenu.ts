import { Selector } from "testcafe";

// NOTE: Can't seem to target the right react component.
//       I believe this is because menu items aren't their own component
//       but that the new react library uses a function to output a base
//       JSX element
/*
export const SideMenu = {
  dfspFinancialPositionsButton: ReactSelector('MenuItems .rc-menu-item').withProps({ label: 'Transfers' }),
};
*/

export const SideMenu = {
  transfersButton: Selector('.rc-menu-item').withText('Transfers'),
};
