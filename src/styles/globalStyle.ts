import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body *{
    color: black;    
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  a {
      color: inherit;
      text-decoration: none;
  }

   button {
     padding: 0;
     background: none;
     border: none;
    
    &:focus {
    outline: none;
    }
  }

   li {
     list-style: none;
   }

   input{
    border: none;
    padding: 0;

    &:focus {
      outline: none;
    }
   }

  select {
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

    &::-ms-expand {
      display: none;
    }

    &:focus {
      outline: none;
    }
  }

  option {
    appearance: none;
  }

  textarea {
    resize: none;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
