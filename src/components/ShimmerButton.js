import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const ShimmerButton = React.forwardRef(({
    shimmerColor = "#ffffff",
    shimmerSize = "0.15em",
    shimmerDuration = "3s",
    borderRadius = "100px",
    background = "rgba(0, 0, 0, 1)",
    className,
    children,
    ...props
}, ref) => {
    return (
        <button
            style={{
                "--spread": "90deg",
                "--shimmer-color": shimmerColor,
                "--radius": borderRadius,
                "--speed": shimmerDuration,
                "--cut": shimmerSize,
                "--bg": background,
            }}
            className={cn(
                "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
                "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
                className
            )}
            ref={ref}
            {...props}
        >
            <div className={cn(
                "-z-30 blur-[2px]",
                "absolute inset-0 overflow-visible [container-type:size]"
            )}>
                <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                    <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                </div>
            </div>
            <span className="relative z-10">{children}</span>
            <div className={cn(
                "absolute inset-0",
                "rounded-[inherit] px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
                "transform-gpu transition-all duration-300 ease-in-out",
                "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
                "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            )} />
            <div className={cn(
                "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
            )} />
        </button>
    );
});

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;