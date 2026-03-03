type Props = {
    show: boolean;
    children: Readonly<React.ReactNode>;
};

export const Conditional = ({ show, children }: Props) => {
    return show ? <>{children}</> : null;
};
