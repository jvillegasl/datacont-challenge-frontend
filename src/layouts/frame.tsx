import { ReactNode } from "react";

type FrameProps = {
    children: ReactNode;
    title: string;
};

export function Frame({ children, title }: FrameProps) {
    return (
        <div>
            <header className="fs-1 text-white border-bottom mb-4">{title}</header>

            <main>{children}</main>
        </div>
    );
}
