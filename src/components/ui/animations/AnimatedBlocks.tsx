"use client";
import {motion, Variants} from "framer-motion";
import {ReactNode} from "react";

interface AnimatedBlockProps {
    children: ReactNode;
    delay?: number;
}

const fadeInBottom: Variants = {
    hidden: {opacity: 0, y: 100},
    visible: {opacity: 1, y: 0},
};

const fadeInLeft: Variants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0},
};

const fadeInRight: Variants = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0},
};

export function FadeInBottom({children, delay = 0}: AnimatedBlockProps) {
    return (
        <motion.div
            initial="hidden"
            variants={fadeInBottom}
            whileInView="visible"
            viewport={{amount: 0.1, once: true}}
            transition={{duration: 0.3, delay}}
        >
            {children}
        </motion.div>
    );
}

export function FadeInLeft({children, delay = 0}: AnimatedBlockProps) {
    return (
        <motion.div
            initial="hidden"
            variants={fadeInLeft}
            whileInView="visible"
            viewport={{amount: 0.1, once: true}}
            transition={{duration: 0.3, delay}}
        >
            {children}
        </motion.div>
    );
}

export function FadeInRight({children, delay = 0}: AnimatedBlockProps) {
    return (
        <motion.div
            initial="hidden"
            variants={fadeInRight}
            whileInView="visible"
            viewport={{amount: 0.1, once: true}}
            transition={{duration: 0.3, delay}}
        >
            {children}
        </motion.div>
    );
}