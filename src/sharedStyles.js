import styled from 'styled-components';

import {css} from 'styled-components';

const Rainbow = css`
  background: linear-gradient(to right, rgba(236, 146, 86, 0.87) , rgba(236, 221, 86, 0.87), rgba(133, 236, 86, 0.87), rgba(86, 231, 236, 0.87), rgba(86, 96, 236, 0.87), rgba(236, 86, 211, 0.87));
`

const Title = styled.h3`
${Rainbow}
text-align: center;
color: #fff;
padding: 15px;
border-radius: 5px;
margin-top: 30px;
margin-bottom: 20px;
`


export { Rainbow, Title };