interface HeadingProps {
    title: string;
    description?: string;
    className?: string;
}

export default function Heading({ title, description, className = '' }: HeadingProps) {
    return (
        <div className={`mb-8 space-y-0.5 ${className}`}>
            <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
            {description && (
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}