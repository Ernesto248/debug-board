export declare const containerVariants: {
    maximized: {
        y: number;
        height: string;
        width: string;
        opacity: number;
        scale: number;
        transition: {
            type: string;
            damping: number;
            stiffness: number;
        };
    };
    minimized: {
        y: string;
        height: string;
        width: string;
        opacity: number;
        scale: number;
        transition: {
            type: string;
            damping: number;
            stiffness: number;
            delay: number;
        };
    };
};
export declare const contentVariants: {
    initial: {
        opacity: number;
        y: number;
    };
    animate: {
        opacity: number;
        y: number;
        transition: {
            opacity: {
                duration: number;
            };
            y: {
                type: string;
                damping: number;
                stiffness: number;
            };
        };
    };
    exit: {
        opacity: number;
        y: number;
        scale: number;
        transition: {
            opacity: {
                duration: number;
            };
            scale: {
                duration: number;
            };
        };
    };
};
export declare const stackVariants: {
    hidden: {
        height: number;
        opacity: number;
    };
    visible: {
        height: string;
        opacity: number;
        transition: {
            duration: number;
        };
    };
};
export declare const logItemVariants: {
    initial: {
        opacity: number;
        y: number;
        scale: number;
    };
    animate: {
        opacity: number;
        y: number;
        scale: number;
        transition: {
            type: string;
            damping: number;
        };
    };
    exit: {
        opacity: number;
        scale: number;
        x: number;
        transition: {
            duration: number;
        };
    };
};
export declare const emptyContainerVariants: {
    initial: {
        opacity: number;
        height: string;
    };
    exit: {
        opacity: number;
        height: number;
        transition: {
            height: {
                delay: number;
                duration: number;
            };
            opacity: {
                duration: number;
            };
        };
    };
};
