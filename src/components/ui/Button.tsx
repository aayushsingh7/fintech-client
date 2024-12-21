import { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    buttonStyleType?: string;
}

const Button: FC<ButtonProps> = ({ buttonStyleType, children, ...props }) => {
    return (
        <button {...props} className={`button ${buttonStyleType == "dark" ? "dark" : "light"}`}>
            {children}
        </button>
    );
};

export default Button;
