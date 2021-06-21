import { BarLoader } from "react-spinners";
import { css } from "@emotion/react";


const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: #4A90E2;
`;

export const Loader = () => <BarLoader
    color='#4A90E2'
    width={200}
    height={5}
    css={override} />