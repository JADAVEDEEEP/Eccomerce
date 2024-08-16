
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg mb-8">Experience the beauty of 3D animations with Three.js</p>

      {/* Three.js Canvas */}
      <div className="w-full h-96">
        <Canvas>
          <Suspense fallback={null}>
            {/* Simple Sphere with Orbit Controls */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sphere args={[1, 32, 32]}>
              <meshStandardMaterial color="orange" />
            </Sphere>
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
