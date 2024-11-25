import { FC, ReactNode } from "react";
import "./button.css"

type TProps = {
  children: ReactNode,
  onClick?: () => void,
  type: string,
}

const Button: FC<TProps> = ({ children, onClick, type }) => {
  return (
    <button className={ type === "primary" ? "button  primary" : "button main"} onClick={onClick}>
      {children}
      {
        type === "primary" ?
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_105)">
              <path d="M7.58637 5.22558L2.96108 0.613083C2.80954 0.462049 2.56419 0.462303 2.4129 0.613865C2.26173 0.765407 2.26212 1.01089 2.41368 1.16205L6.76366 5.50002L2.41352 9.83797C2.26198 9.98914 2.26159 10.2345 2.41274 10.386C2.48858 10.462 2.58794 10.5 2.68729 10.5C2.78639 10.5 2.88536 10.4623 2.96106 10.3868L7.58637 5.77443C7.65936 5.70181 7.70032 5.60299 7.70032 5.50002C7.70032 5.39705 7.65924 5.29834 7.58637 5.22558Z" fill="#5D71DD" />
            </g>
            <defs>
              <clipPath id="clip0_1_105">
                <rect width="10" height="10" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
          :
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5857 8.85046L1.01474 0.279244C0.719033 0.144962 0.366184 0.22496 0.160475 0.479239C-0.046663 0.733519 -0.0538057 1.09494 0.143332 1.35636L6.25033 9.49902L0.143332 17.6417C-0.0538057 17.9031 -0.046663 18.2659 0.159046 18.5188C0.297614 18.6917 0.504752 18.7845 0.714747 18.7845C0.816173 18.7845 0.917599 18.7631 1.01331 18.7188L19.5843 10.1476C19.8386 10.0304 20 9.77758 20 9.49902C20 9.22045 19.8386 8.9676 19.5857 8.85046Z" fill="white" />
          </svg>
      }
    </button>
  );
}

export default Button;