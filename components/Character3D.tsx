'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

declare global {
  interface Window {
    toggleWeaponsMenu: () => void;
    toggleLegsMenu: () => void;
    applyWeapon: (value: number) => void;
    applyLegs: (value: number) => void;
  }
}

export default function Character3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const appliedLegRef = useRef<THREE.Group | null>(null);
  const appliedWeaponRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const container = mountRef.current;
    const width = container?.clientWidth || window.innerWidth;
    const height = container?.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Materials
    const materialDarkest = new THREE.MeshPhongMaterial({ color: 0x33281b });
    const materialDark = new THREE.MeshPhongMaterial({ color: 0x664e31 });
    const materialLight = new THREE.MeshPhongMaterial({ color: 0xa3835b });
    const steelMaterial = new THREE.MeshPhongMaterial({ color: 0x878787 });
    const skinMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffdbac,
      flatShading: false
    });

    // Canvas Renderer
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 12;

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;

    // Weapons
    function axe() {
      const axeHandleGeo = new THREE.BoxGeometry(7, 0.25, 0.25);
      const handle = new THREE.Mesh(axeHandleGeo, materialLight);
      const axeShape = new THREE.Shape();
      
      axeShape.moveTo(0, 0.15);
      axeShape.lineTo(1, 1);
      axeShape.lineTo(1.25, 0.5);
      axeShape.lineTo(1.25, -0.5);
      axeShape.lineTo(1, -1);
      axeShape.lineTo(0, -0.15);
      
      const extrudeSettings = {
        steps: 2,
        depth: 0.05,
        bevelEnabled: true,
        bevelThickness: 0.25,
        bevelSize: 0.5,
        bevelOffset: 0,
        bevelSegments: 1
      };

      const axeGeo = new THREE.ExtrudeGeometry(axeShape, extrudeSettings);
      const buttGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const butt1 = new THREE.Mesh(buttGeo, steelMaterial);
      const butt2 = new THREE.Mesh(buttGeo, steelMaterial);
      const butt3 = new THREE.Mesh(buttGeo, steelMaterial);
      const axe1 = new THREE.Mesh(axeGeo, steelMaterial);
      const axe2 = new THREE.Mesh(axeGeo, steelMaterial);
      
      axe1.castShadow = true;
      axe2.castShadow = true;
      handle.castShadow = true;
      
      const group = new THREE.Group();
      
      group.add(handle);
      group.add(axe1);
      group.add(axe2);
      group.add(butt1);
      group.add(butt2);
      group.add(butt3);
      
      axe1.position.set(2.75, 0.4, 0);
      axe1.rotation.z = Math.PI / 2;
      axe2.position.set(2.75, -0.4, 0);
      axe2.rotation.z = -Math.PI / 2;
      butt2.position.set(-3.5, 0, 0);
      butt3.position.set(3.5, 0, 0);
      
      return group;
    }

    function sword() {
      const handleGeo1 = new THREE.BoxGeometry(1.5, 0.25, 0.25);
      const handle1 = new THREE.Mesh(handleGeo1, materialLight);
      
      const handleGeo2 = new THREE.BoxGeometry(0.25, 2, 0.25);
      const handle2 = new THREE.Mesh(handleGeo2, materialLight);
      
      const shape = new THREE.Shape();
      const extrudeSettings = {
        steps: 2,
        depth: 0.05,
        bevelEnabled: true,
        bevelThickness: 0.25,
        bevelSize: 0.5,
        bevelOffset: 0,
        bevelSegments: 1
      };
      
      shape.moveTo(0, 0.1);
      shape.lineTo(4, 0.5);
      shape.lineTo(4.5, 0);
      shape.lineTo(4, -0.5);
      shape.lineTo(0, -0.1);
      
      const bladeGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const blade = new THREE.Mesh(bladeGeo, steelMaterial);
      
      const group = new THREE.Group();
      
      handle1.position.set(-0.85, 0.0, 0);
      blade.position.set(0.5, 0, 0);
      
      handle1.castShadow = true;
      blade.castShadow = true;
      handle2.castShadow = true;
      
      group.add(blade);
      group.add(handle1);
      group.add(handle2);
      
      group.position.set(-0.5, 0, -0.05);
      group.rotation.x = Math.PI / 6;
      
      return group;
    }

    // Legs 
    function pegLeg() {
      const pegLegGeo = new THREE.BoxGeometry(0.5, 1.8, 0.5);
      const leg = new THREE.Mesh(pegLegGeo, materialLight);
      
      const stumpUpperGeo = new THREE.BoxGeometry(1, 0.75, 1);
      const stumpUpper = new THREE.Mesh(stumpUpperGeo, materialLight);
      
      const stumpMaterial = new THREE.MeshPhongMaterial({ color: 0x26211a });
      const stumpGeo = new THREE.BoxGeometry(0.6, 0.2, 0.6);
      const stump = new THREE.Mesh(stumpGeo, stumpMaterial);
      
      const group = new THREE.Group();

      stump.position.set(1, -4.65, -0.34);
      leg.position.set(1, -3.75, -0.35);
      stumpUpper.position.set(1, -3.1, -0.35);
      
      group.add(stump);
      group.add(leg);
      group.add(stumpUpper);
      
      return group;
    }

    function rightLeg() {
      const legGeo = new THREE.BoxGeometry(1.25, 1, 1.4);
      const legRight = new THREE.Mesh(legGeo, materialDark);
      
      const bootGeo1 = new THREE.BoxGeometry(1, 0.8, 1);
      const bootGeo2 = new THREE.BoxGeometry(1, 0.45, 1);
      
      const bootTopRight = new THREE.Mesh(bootGeo1, materialDarkest);
      const bootBottomRight = new THREE.Mesh(bootGeo2, materialDarkest);
      
      const group = new THREE.Group();
      
      legRight.castShadow = true;
      bootTopRight.castShadow = true;
      bootBottomRight.castShadow = true;
      
      legRight.position.set(0.75, -3.5, -0.35);
      
      group.add(legRight);
      group.add(bootTopRight);
      group.add(bootBottomRight);

      bootTopRight.position.set(0.75, -4.4, -0.35);
      bootBottomRight.position.set(0.75, -4.58, 0.1);
      
      return group;
    }

    // Functions
    function addLights() {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
      const light = new THREE.HemisphereLight(0xffffff, 0xb3858c, 0.9);

      scene.add(light);
      scene.add(directionalLight);
      
      directionalLight.position.set(8, 8, 2);
      directionalLight.castShadow = true;
      
      directionalLight.shadow.mapSize.width = 512;
      directionalLight.shadow.mapSize.height = 512;
      directionalLight.shadow.camera.near = 0.5;
      directionalLight.shadow.camera.far = 500;
    }



    function addHead() {
      const headGeo = new THREE.BoxGeometry(1.5, 1.5, 1.2);
      const head = new THREE.Mesh(headGeo, skinMaterial);
      
      const browGeo = new THREE.BoxGeometry(1.5, 0.5, 0.5);
      const brow = new THREE.Mesh(browGeo, skinMaterial);
      
      const noseGeo = new THREE.BoxGeometry(0.35, 0.5, 0.5);
      const nose = new THREE.Mesh(noseGeo, skinMaterial);
     
      scene.add(head);
      scene.add(brow);
      scene.add(nose);
      
      head.castShadow = true;
      head.receiveShadow = true;
      brow.castShadow = true;
      nose.castShadow = true;
      
      head.position.set(0, 2, 0);
      brow.position.set(0, 2.43, 0.46);
      nose.position.set(0, 2.05, 0.54);
      
      brow.rotation.x = 130;
    }

    function addBeard() {
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xcc613d,
        flatShading: true
      });
      
      const shape1 = new THREE.Shape();
      const shape2 = new THREE.Shape();
      
      shape1.moveTo(-0.75, 0);
      shape1.bezierCurveTo(-0.75, -0.75, -0.5, -1, -0.15, -1.5);
      shape1.lineTo(-2, -1.5);
      shape1.lineTo(-2, 0);
      
      shape2.moveTo(-0.75, 0);
      shape2.bezierCurveTo(-0.75, -0.75, -0.5, -1, -0.25, -1.25);
      shape2.lineTo(-2, -1.25);
      shape2.lineTo(-2, 0);
      
      const primarySettings = {
        steps: 2,
        depth: 1,
        bevelEnabled: false
      };
      
      const secondarySettings = {
        steps: 2,
        depth: 1,
        bevelEnabled: false
      };
      
      const primaryBeardGeo = new THREE.ExtrudeGeometry(shape1, primarySettings);
      const primaryBeard = new THREE.Mesh(primaryBeardGeo, material);
      
      const secondaryBeardGeo = new THREE.ExtrudeGeometry(shape2, secondarySettings);
      const secondaryBeardLeft = new THREE.Mesh(secondaryBeardGeo, material);
      const secondaryBeardRight = new THREE.Mesh(secondaryBeardGeo, material);
      
      scene.add(primaryBeard);
      scene.add(secondaryBeardLeft);
      scene.add(secondaryBeardRight);
      
      primaryBeard.castShadow = true;
      secondaryBeardLeft.castShadow = true;
      secondaryBeardRight.castShadow = true;
      
      primaryBeard.position.set(0.5, 1.5, 1.65);
      secondaryBeardLeft.position.set(1.1, 1.4, 1.3);
      secondaryBeardRight.position.set(-0.18, 1.4, 1.55);
      
      primaryBeard.rotation.y = -Math.PI / 2;
      secondaryBeardLeft.rotation.y = -Math.PI / 2 + 0.25;
      secondaryBeardRight.rotation.y = -Math.PI / 2 - 0.25;
    }

    function addMustache() {
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xcc613d,
        flatShading: true
      });
      
      const mustacheGeo = new THREE.BoxGeometry(0.6, 0.2, 0.25);
      const mustacheLeft = new THREE.Mesh(mustacheGeo, material);
      const mustacheRight = new THREE.Mesh(mustacheGeo, material);
      
      scene.add(mustacheLeft);
      scene.add(mustacheRight);
      
      mustacheLeft.position.set(-0.25, 1.55, 0.7);
      mustacheRight.position.set(0.25, 1.55, 0.7);
      
      mustacheLeft.rotation.z = Math.PI / 8;
      mustacheRight.rotation.z = -Math.PI / 8;
    }



    function addBody() {
      const shape1 = new THREE.Shape();
      const shape2 = new THREE.Shape();
      
      shape1.moveTo(-2, -0.5);
      shape1.lineTo(-1.5, -3.5);
      shape1.lineTo(1.5, -3.5);
      shape1.lineTo(2, -0.5);
      shape1.lineTo(2, 0);
      shape1.lineTo(2, 0.5);
      shape1.lineTo(-2, 0.5);
      shape1.lineTo(-2, 0);
      
      shape2.moveTo(-1.95, -0.5);
      shape2.lineTo(-1.5, -1.25);
      shape2.lineTo(1.5, -1.25);
      shape2.lineTo(1.9, -0.5);
      shape2.lineTo(1.95, 0);
      shape2.lineTo(1.95, 0.5);
      shape2.lineTo(-1.95, 0.5);
      shape2.lineTo(-1.95, 0);
      
      const extrudeSettings = {
        steps: 2,
        depth: 1.75,
        bevelEnabled: false
      };
      
      const bodyGeo = new THREE.ExtrudeGeometry(shape1, extrudeSettings);
      const body = new THREE.Mesh(bodyGeo, skinMaterial);
      
      const upperBodyGeo = new THREE.ExtrudeGeometry(shape2, extrudeSettings);
      const upperBody = new THREE.Mesh(upperBodyGeo, skinMaterial);
      
      const beltGeo = new THREE.BoxGeometry(3.5, 0.5, 2.1);
      const belt = new THREE.Mesh(beltGeo, steelMaterial);
      
      scene.add(body);
      scene.add(upperBody);
      scene.add(belt);
      
      body.castShadow = true;
      upperBody.castShadow = true;
      belt.castShadow = true;
      
      upperBody.receiveShadow = true;
      body.receiveShadow = true;
      belt.receiveShadow = true;

      body.position.set(0, 0.75, -1.25);
      upperBody.position.set(0, 0.525, -1.155);
      belt.position.set(0, -2.5, -0.4);
      
      upperBody.rotation.x = -Math.PI / 24;
    }

    function addLeftArm() {
      const bicepGeo = new THREE.BoxGeometry(2.5, 1, 1);
      const bicep = new THREE.Mesh(bicepGeo, skinMaterial);
      const foreArmGeo = new THREE.BoxGeometry(2.5, 1.25, 1.25);
      const foreArm = new THREE.Mesh(foreArmGeo, skinMaterial);
      
      scene.add(bicep);
      scene.add(foreArm);
      
      bicep.castShadow = true;
      foreArm.castShadow = true;
      
      bicep.position.set(-2, 0, 0.2);
      bicep.rotation.z = Math.PI / 4;
      bicep.rotation.y = Math.PI / 4;
      
      foreArm.position.set(-2.4, 0, 1.2);
      foreArm.rotation.z = -Math.PI / 2 - 0.3;
      foreArm.rotation.x = Math.PI / 8;
    }

    function addRightArm() {
      const bicepGeo = new THREE.BoxGeometry(2.5, 1, 1);
      const bicep = new THREE.Mesh(bicepGeo, skinMaterial);
      const foreArmGeo = new THREE.BoxGeometry(2.5, 1.25, 1.25);
      const foreArm = new THREE.Mesh(foreArmGeo, skinMaterial);
      
      scene.add(bicep);
      scene.add(foreArm);
      
      bicep.castShadow = true;
      foreArm.castShadow = true;
      
      bicep.position.set(2, 0, -0.25);
      bicep.rotation.z = -Math.PI / 4;
      bicep.rotation.y = -Math.PI / 8;
      
      foreArm.position.set(2.4, -1.5, 0.42);
      foreArm.rotation.z = Math.PI / 2 - 0.3;
      foreArm.rotation.x = -Math.PI / 8;
    }

    function addArms() {
      addLeftArm();
      addRightArm();
    }

    function addLegs() {
      const pantsGeo = new THREE.BoxGeometry(3.25, 0.6, 1.8);
      const pants = new THREE.Mesh(pantsGeo, materialDark);
      
      const legGeo = new THREE.BoxGeometry(1.25, 1, 1.4);
      const legLeft = new THREE.Mesh(legGeo, materialDark);
      
      const bootGeo1 = new THREE.BoxGeometry(1, 0.8, 1);
      const bootGeo2 = new THREE.BoxGeometry(1, 0.45, 1);
      
      const bootTopLeft = new THREE.Mesh(bootGeo1, materialDarkest);
      const bootBottomLeft = new THREE.Mesh(bootGeo2, materialDarkest);
      
      scene.add(pants);
      scene.add(legLeft);
      scene.add(appliedLegRef.current!);
      scene.add(bootTopLeft);
      scene.add(bootBottomLeft);
      
      pants.castShadow = true;
      legLeft.castShadow = true;
      bootTopLeft.castShadow = true;
      bootBottomLeft.castShadow = true;
      
      pants.position.set(0, -2.75, -0.4);
      legLeft.position.set(-0.75, -3.5, -0.35);
      bootTopLeft.position.set(-0.75, -4.4, -0.35);
      bootBottomLeft.position.set(-0.75, -4.58, 0.1);
    }

    function addWeapon() {
      const group = new THREE.Group();
      
      group.add(appliedWeaponRef.current!);
      
      scene.add(group);

      group.position.set(-1.8, 1.5, 0);
      group.rotation.y = Math.PI / 2;
      group.rotation.x = Math.PI / 12;
    }

    function draw() {
      scene.remove(...scene.children);
      addHead();
      addBeard();
      addMustache();
      addBody();
      addArms();
      addLegs();
      addWeapon();
      addLights();
    }

    // Initialize with default values
    appliedLegRef.current = rightLeg();
    appliedWeaponRef.current = axe();

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    animate();
    draw();

    // Global functions for UI interaction
    window.applyLegs = function(value: number) {
      const legs = {
        0: rightLeg(),
        1: pegLeg()
      };
      
      appliedLegRef.current = legs[value as keyof typeof legs];
      draw();
    };

    window.applyWeapon = function(value: number) {
      const weapons = {
        0: axe(),
        1: sword()
      };
      
      appliedWeaponRef.current = weapons[value as keyof typeof weapons];
      draw();
    };

    // Handle window resize
    function onWindowResize() {
      const container = mountRef.current;
      const width = container?.clientWidth || window.innerWidth;
      const height = container?.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener('resize', onWindowResize, false);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onWindowResize);
      const currentMount = mountRef.current;
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div id="background" ref={mountRef} className="background"></div>
      
      <div className="tip">Drag the screen to look around</div>
      
             <div className="attachment attachment-weapon" onClick={() => {
         const element = document.querySelector('.weapon-options') as HTMLElement;
         const signElement = document.querySelector('.add-sign-weapon') as HTMLElement;
         const isOpen = element?.style.visibility === 'visible';
         
         if (element && signElement) {
           element.style.visibility = isOpen ? 'hidden' : 'visible';
           element.style.opacity = isOpen ? '0' : '1';
           signElement.style.transform = isOpen ? "rotate(0deg)" : "rotate(45deg)";
         }
       }}>
        <div className="attachment__button-content">
          <div className="add-sign">
            <div className="add-sign-plus add-sign-weapon">+</div>
          </div>
        </div>
      </div>

      <div className="options weapon-options">
        <div className="attachment-options attachment-options-weapon">
          <div className="option" onClick={() => window.applyWeapon(0)}>
            <svg className="axe-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
              <path d="M7 1a1 1 0 112 0v18a1 1 0 11-2 0V1z" fill="#fff"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 2.618a.5.5 0 00-.724-.447L9.275 4.42a.5.5 0 00.048.916l4.501 1.688a.5.5 0 00.676-.468V2.618zm-1.17-1.342a1.5 1.5 0 012.17 1.342v3.939a1.5 1.5 0 01-2.027 1.404L8.972 6.273c-1.227-.46-1.316-2.16-.144-2.746l4.501-2.25z" fill="#fff"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 2.618a.5.5 0 01.724-.447l4.501 2.25a.5.5 0 01-.048.916L2.176 7.025a.5.5 0 01-.676-.468V2.618zm1.17-1.342A1.5 1.5 0 00.5 2.618v3.939a1.5 1.5 0 002.027 1.404l4.501-1.688c1.227-.46 1.316-2.16.144-2.746l-4.501-2.25z" fill="#fff"/>
            </svg>
          </div>
          <div className="option" onClick={() => window.applyWeapon(1)}>
            <svg className="sword-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.5 6.382V16.5h-5V6.378c.56-1.389 1.049-2.392 1.493-3.043.474-.695.795-.838.976-.835.19.003.52.168 1.005.87.453.657.951 1.654 1.526 3.012zm-3 12.118h1V21a.5.5 0 01-1 0v-2.5z" stroke="#fff"/>
            </svg>
          </div>
        </div>
      </div>

             <div className="attachment attachment-legs" onClick={() => {
         const element = document.querySelector('.leg-options') as HTMLElement;
         const signElement = document.querySelector('.add-sign-legs') as HTMLElement;
         const isOpen = element?.style.visibility === 'visible';
         
         if (element && signElement) {
           element.style.visibility = isOpen ? 'hidden' : 'visible';
           element.style.opacity = isOpen ? '0' : '1';
           signElement.style.transform = isOpen ? "rotate(0deg)" : "rotate(45deg)";
         }
       }}>
        <div className="attachment__button-content">
          <div className="add-sign">
            <div className="add-sign-plus add-sign-legs">+</div>
          </div>
        </div>
      </div>

      <div className="options leg-options">
        <div className="attachment-options attachment-options-legs">
          <div className="option" onClick={() => window.applyLegs(1)}>
            <svg className="pegleg-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M17 4H7v3h10V4zM7 3a1 1 0 00-1 1v3a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H7z" fill="#fff"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14 8h-4v4h4V8zm-4-1a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4z" fill="#fff"/>
              <path d="M11 13h2v7h-2v-7zM10 20h4v1h-4v-1z" fill="#fff"/>
            </svg>
          </div>
          <div className="option" onClick={() => window.applyLegs(0)}>
            <svg className="leg-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5A1.5 1.5 0 017.5 3H12a1.5 1.5 0 011.5 1.5v10a.5.5 0 00.5.5h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0117 21H7.5A1.5 1.5 0 016 19.5v-15zM7.5 4a.5.5 0 00-.5.5V9h5.5V4.5A.5.5 0 0012 4H7.5zm5 6H7v9.5a.5.5 0 00.5.5H17a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3a1.5 1.5 0 01-1.5-1.5V10z" fill="#fff"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 