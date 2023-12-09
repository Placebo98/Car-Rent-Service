import {
  HeaderContainer,
  HeaderNavList,
  HeaderNavListLink,
  ContactPhoneLink,
} from './header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <HeaderNavList>
          <li>
            <HeaderNavListLink to="/">Home Page</HeaderNavListLink>
          </li>
          <li>
            <HeaderNavListLink to="/catalog">Catalog</HeaderNavListLink>
          </li>
          <li>
            <HeaderNavListLink to="/favorites">Favorites</HeaderNavListLink>
          </li>
        </HeaderNavList>
      </nav>
      <div>
        <ContactPhoneLink href={'tel: +380730000000'}>
          {'+380730000000'}
        </ContactPhoneLink>
      </div>
    </HeaderContainer>
  );
};
