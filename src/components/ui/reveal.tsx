"use client";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function Reveal({ children, className = "" }: Props) {
    // Temporarily disable entrance animation — return children as-is
    return <div className={className}>{children}</div>;
}
