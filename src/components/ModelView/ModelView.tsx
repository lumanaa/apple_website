import { Html, PerspectiveCamera, View } from "@react-three/drei";
import React, { Suspense } from "react";
import * as THREE from "three";
import "./modelView.scss";
import Lights from "../Lights/Lights";
import IPhone from "../IPhone";

interface ModelViewProps {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group>;
  gsapType: string;
  controlRef: React.MutableRefObject<any>;
  setRotationSize: React.Dispatch<React.SetStateAction<number>>;
  size: "small" | "large";
  item: {
    title: string;
    color: string[];
    img: string;
  };
}

const ModelView: React.FC<ModelViewProps> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className='view-container'
      style={{
        right: index === 2 ? "-100%" : "",
      }}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <group ref={groupRef} position={[0, 0, 0]}>
      </group>
    </View>
  );
};

export default ModelView;
