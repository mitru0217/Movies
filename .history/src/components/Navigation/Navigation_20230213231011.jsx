import React from 'react';
import { StyledLink } from '../UI/Link/Link.styled';
import { MdHome, MdVideoLibrary } from 'react-icons/md';
import { WrapperForIcons } from 'components/UI/Styles/Wrappers.styled';
import { NavigationStyle, NavigationForUser } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationStyle>
      <StyledLink to="/" end>
        <WrapperForIcons>
          <MdHome width="70" />
          <span>Home</span>
        </WrapperForIcons>
      </StyledLink>

      <NavigationForUser>
        <StyledLink to="/library">
          <WrapperForIcons>
            <MdVideoLibrary />
            <span>Library</span>
          </WrapperForIcons>
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavigationForUser>
    </NavigationStyle>
  );
};

export default Navigation;