import * as React from "react"

import { cn } from "@/lib/utils"

const AutofillInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
		<div>
			<input
				type={type}
				className={cn(
					'flex h-9 w-full border-b border-[var(--color-primary)] bg-transparent px-3 py-1 text-base text-[var(--color-primary)] transition-colors placeholder:text-[var(--color-accent)] focus-visible:outline-none focus-visible:border-b-3  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm relative z-10',
					className
				)}
				ref={ref}
				{...props}
			/>
		</div>
	);
  }
)
AutofillInput.displayName = 'Input';

export { AutofillInput };
