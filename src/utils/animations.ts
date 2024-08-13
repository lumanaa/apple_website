import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as THREE from "three";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

interface AnimationProps extends Record<string, number | string | gsap.EaseFunction | undefined> {}

interface ScrollProps extends Record<string, unknown> {}

export const animateWithGsap = (
  target: string | Element,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: React.MutableRefObject<THREE.Object3D>,
  rotationState: number,
  firstTarget: string | Element,
  secondTarget: string | Element,
  animationProps: AnimationProps
): void => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );
};
