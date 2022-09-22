import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export function loadGLTFModel(
    scene,
    glbPath,
    options = {
        receiveShadow: true, castShadow: true
    }
) {
    const { receiveShadow, castShadow } = options;
    return new Promise((resolve, reject ) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const object = gltf.scene
                object.name = 'maple tree'
                object.position.y = -0.5
                object.position.x = 0
                object.position.z = 0
                object.receiveShadow = receiveShadow
                object.castShadow = castShadow
                scene.add(object)

                object.traverse((child) => {
                    if (child.isMesh) {
                        child.receiveShadow = receiveShadow
                        child.castShadow = castShadow
                    }
                })

                resolve(object)
            },
            undefined,
            error => reject(error)
        )
    })
}