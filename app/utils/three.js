import { Cache, TextureLoader } from 'three';
import { DRACOLoader, GLTFLoader } from 'three-stdlib';

// Enable caching for all loaders
Cache.enabled = true;

const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
dracoLoader.setDecoderPath('/draco/');
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = gltfLoader;
export const textureLoader = new TextureLoader();

/**
 * Checks whether WebGL is supported in the current environment
 */
export const isWebGLAvailable = () => {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') ||
          canvas.getContext('experimental-webgl') ||
          canvas.getContext('webgl2'))
    );
  } catch (e) {
    return false;
  }
};

/**
 * Clean up a scene's materials and geometry
 */
export const cleanScene = scene => {
  if (!scene) return;
  scene.traverse?.(object => {
    if (!object.isMesh) return;

    object.geometry?.dispose?.();

    if (object.material?.isMaterial) {
      cleanMaterial(object.material);
    } else if (Array.isArray(object.material)) {
      for (const material of object.material) {
        cleanMaterial(material);
      }
    }
  });
};

/**
 * Clean up and dispose of a material
 */
export const cleanMaterial = material => {
  if (!material) return;
  material.dispose?.();

  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose?.();

      // Close GLTF bitmap textures
      value.source?.data?.close?.();
    }
  }
};

/**
 * Clean up and dispose of a renderer
 */
export const cleanRenderer = renderer => {
  if (!renderer) return;
  try {
    renderer.dispose?.();
    renderer.forceContextLoss?.();
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  } catch (e) {
    // Ignore dispose errors
  }
};

/**
 * Clean up lights by removing them from their parent
 */
export const removeLights = lights => {
  if (!lights || !Array.isArray(lights)) return;
  for (const light of lights) {
    light?.parent?.remove?.(light);
  }
};

/**
 * Get child by name
 */
export const getChild = (name, object) => {
  if (!object) return null;
  let node;

  object.traverse?.(child => {
    if (child.name === name) {
      node = child;
    }
  });

  return node;
};
