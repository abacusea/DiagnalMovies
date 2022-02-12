import tw, { styled } from "twin.macro";

export const MoviesContainer = styled.div`
  ${tw`
    my-8
  `}
`;


export const MoviesRow = styled.div`
  ${tw`
      grid grid-cols-3 gap-3
      mt-4
      p-4
    `}

  &::-webkit-scrollbar {
    display: none;
  }
  text-align: -webkit-center
`;

