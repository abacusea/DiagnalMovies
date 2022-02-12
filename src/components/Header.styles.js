import tw, { styled } from "twin.macro";

export const HeaderWrapper = styled.div`
    ${tw`
        bg-black
        flex
        fixed
        justify-between
        items-center
        w-full
        top-0
        py-4
        px-2
    `}

    z-index:1;
`;

export const MovieGenre = styled.h2`
  ${tw`
      font-bold
      uppercase
      mx-2
    `}
    transition: all 1s;
`;

export const BackButton = styled.img`
    width: 20px
`;
export const SearchBar = styled.img`
    width: 20px
`;
export const LeftPane = styled.div`
  ${tw`
      flex
      items-center
    `}
`;
export const One = styled.div`
    ${tw`
        relative ml-auto text-gray-600
    `}
    animation: slideIn 1s;
    @keyframes slideIn {
        0% {
            margin-right: -30px
        }
        100% {
            margin-right: 0
        }
    }
`;
export const SearchInput = styled.input`
    ${tw`
        border-2 border-gray-300 bg-black text-white h-10 px-1 pr-1 rounded-lg text-sm focus:outline-none 
    `}
    animation: slideIn 0.4s ease-in-out;
    @keyframes slideIn {
        0% {
            margin-right: -30px
        }
        100% {
            margin-right: 0
        }
    }
    
`;
export const SearchButton = styled.button`
    ${tw`
        absolute right-0 top-0 mt-4 mr-4
    `}
    
`;
