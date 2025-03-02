
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSHero = ({ className }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    if (mountRef.current) {
      // Clear any existing canvas
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a geometry - using a torus knot for a more complex shape
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    
    // Create a shader material with a custom shader
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x64FFDA) },
        color2: { value: new THREE.Color(0xF0FFC2) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying float vDisplacement;
        uniform float time;
        
        void main() {
          vUv = uv;
          
          // Create a displacement based on position and time
          vec3 newPosition = position + normal * sin(position.x * 0.05 + time) * 2.0;
          
          // Pass displacement to fragment shader
          vDisplacement = sin(position.x * 0.05 + time) * 0.5 + 0.5;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float time;
        varying vec2 vUv;
        varying float vDisplacement;
        
        void main() {
          // Gradient based on displacement and UV coordinates
          vec3 color = mix(color1, color2, vDisplacement * vUv.y + sin(time * 0.2) * 0.2);
          
          // Add glow effect
          float strength = 0.3;
          float glow = (sin(time) * 0.5 + 0.5) * strength;
          color += glow;
          
          gl_FragColor = vec4(color, 0.8);
        }
      `,
      transparent: true
    });

    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    
    // Position the camera
    camera.position.z = 50;
    
    // Add ambient light and directional light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation Loop
    let animationId;
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Update material's time uniform
      material.uniforms.time.value = elapsedTime;
      
      // Rotate the torus knot
      torusKnot.rotation.x = elapsedTime * 0.3;
      torusKnot.rotation.y = elapsedTime * 0.2;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className}></div>;
};

export default ThreeJSHero;
