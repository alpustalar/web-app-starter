import React, { ReactNode } from "react";

type ShowProps = {
    children: ReactNode;
};

type ShowWhenProps = {
    isTrue: boolean;
    children: ReactNode;
};

type ShowElseProps = {
    children: ReactNode;
};

const ShowWhen = ({ isTrue, children }: ShowWhenProps) => (isTrue ? <>{children}</> : null);
const ShowElse = ({ children }: ShowElseProps) => <>{children}</>;

interface ShowComponent extends React.FC<ShowProps> {
    When: React.FC<ShowWhenProps>;
    Else: React.FC<ShowElseProps>;
}

export const Show: ShowComponent = ({ children }) => {
    let when: ReactNode = null;
    let otherwise: ReactNode = null;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            const props = child.props as any;

            if (props.isTrue !== undefined) {
                if (props.isTrue && !when) {
                    when = child;
                }
            } else if (!otherwise) {
                otherwise = child;
            }
        }
    });

    return (when || otherwise) as React.ReactElement | null;
};

Show.When = ShowWhen;
Show.Else = ShowElse;

Show.When.displayName = "Show.When";
Show.Else.displayName = "Show.Else";