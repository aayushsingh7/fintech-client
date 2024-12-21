import { FC, InputHTMLAttributes } from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputStyleDark: string
}

const Input: FC<InputProps> = ({ inputStyleDark, ...props }) => {
    return <input className={`input ${inputStyleDark == 'dark' ? "dark" : "light"}`} {...props} />;
};

export default Input