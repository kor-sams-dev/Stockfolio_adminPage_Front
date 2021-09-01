import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeo from "./SpoqaHanSansNeo-Regular.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        src: local('Spoqa Han Sans Neo'),
        url(${SpoqaHanSansNeo}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
