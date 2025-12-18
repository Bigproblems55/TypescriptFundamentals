interface ButtonProps{
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}

const Button = ({props, children}) => {
    return <button onClick={props.handleClick}>Click Me{children}</button>;
}

export default Button;