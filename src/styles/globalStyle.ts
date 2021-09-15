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

  strong {
    font-weight: 900;
  }

  i {
    font-style: italic;
  }

  ul {
    li { 
     list-style: inside;
     margin-left: 10px;
     line-height: 1.5;
    }
  }
  
  ol {
    li {
     list-style: decimal;
     margin-left: 30px;
     line-height: 1.5;
   }
  }
  
h1 {
  font-size: 30px;
  font-weight: 900;
}

h2 {
  font-size: 25px;
  font-weight: 700;
}

h3 {
  font-size: 20px;
  font-weight: 500;
}

   button {
     padding: 0;
     background: none;
     border: none;
    
    &:focus {
    outline: none;
    }
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
