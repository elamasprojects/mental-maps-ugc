import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

// Reusable testimonial card UI
export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  personName: string;
  roleCompany: string;
  quote: string;
}

export function TestimonialCard({ imageSrc, personName, roleCompany, quote, className, ...props }: TestimonialCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="md:w-40 md:h-40 w-full h-60 rounded-lg overflow-hidden bg-muted flex-shrink-0">
          <img src={imageSrc} alt={personName} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{quote}</p>
          <div className="mt-2">
            <div className="font-semibold text-foreground">{personName}</div>
            <div className="text-sm text-muted-foreground">{roleCompany}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}