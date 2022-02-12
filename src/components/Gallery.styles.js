import tw, { styled } from "twin.macro";

export const MoviesWrapper = styled.div`
    ${tw`
        m-1
    `}
`;

export const MoviesPoster = styled.img`
    ${tw`
        m-1
    `}
  width: 7rem;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.09);
  }
`;

export const MovieTitle = styled.span`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;