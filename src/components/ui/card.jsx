export function Card({ className = '', ...props }) {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`.trim()} {...props} />;
}

export function CardContent({ className = '', ...props }) {
  return <div className={`p-6 ${className}`.trim()} {...props} />;
}
