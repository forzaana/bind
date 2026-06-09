import {ScrollShadow} from '@heroui/react';
import React, { forwardRef } from 'react';
import { cn } from '@heroui/react';

const ScrollingBanner = forwardRef(
    (
        {
            className,
            isReverse,
            isVertical = false,
            gap = "1rem",
            showShadow = true,
            shouldPauseOnHover = true,
            duration = 40,
            children,
            style,
            ...props
        },
        ref,
    ) => {
        const shadowProps = {
            isEnabled: showShadow,
            offset: -20,
            size: 300,
            orientation: isVertical ? "vertical" : "horizontal",
            visibility: "both",
            ...props,
        };

        return (
            <ScrollShadow
                {...shadowProps}
                ref={ref}
                className={cn(
                    "flex",
                    {
                        "w-full": !isVertical,
                        "overflow-y-hidden": isVertical,
                        "overflow-x-hidden": !isVertical,
                        "max-h-[calc(100vh_-_200px)]": isVertical,
                    },
                    className,
                )}
                style={{
                    // @ts-ignore
                    "--gap": gap,
                    "--duration": `${duration}s`,
                    ...style,
                }}
            >
                <div
                    className={cn("flex w-max items-stretch gap-[--gap]", {
                        "flex-col": isVertical,
                        "h-full": isVertical,
                        "animate-scrolling-banner": !isVertical,
                        "animate-scrolling-banner-vertical": isVertical,
                        "[animation-direction:reverse]": isReverse,
                        "hover:[animation-play-state:paused]": shouldPauseOnHover,
                    })}
                >
                    {React.Children.map(children, (child) => React.cloneElement(child))}
                </div>
            </ScrollShadow>
        );
    },
);
export default ScrollingBanner;
