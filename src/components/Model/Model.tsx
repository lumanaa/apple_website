import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Model.scss";
import ModelView from "../ModelView/ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../../constants";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  //camera control for the model view

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
    });
  });

  return (
    <section className='model-section'>
      <div className='model-body'>
        <h1 id='heading' className='section-heading'>
          Take a closer look.
        </h1>
        <div className='model-container'>
          <div className='model-content'>
            <ModelView
              index={1}
              groupRef={small}
              gsaptype='view1'
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsaptype='view2'
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className='canvas'
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root") || undefined}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className='modify-container'>
            <p className='model-title'>{model.title}</p>
            <div className='modify-color'>
              <ul className='color-container'>
                {models.map((item, i) => (
                  <li
                    key={i}
                    className='color-li'
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className='modify-btn'>
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className='label'
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }} onClick={()=>setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
