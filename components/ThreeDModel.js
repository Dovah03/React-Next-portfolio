import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { loadGLTFModel } from "../libs/3D-model";
import {LoadingSpinner, ModelContainer} from "./ThreeDLazyLoader"

const easeOutCirc = (x) => {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const ThreeDModel = () => {
    const refContainer = useRef()
    const [ loading, setLoading ] = useState(true)
    const [ renderer, setRenderer ] = useState()
    const [ _camera, setCamera ] = useState()
    const [ target ] = useState(new THREE.Vector3(-0, 0, 0))
    const [ initialCameraPosition] = useState(new THREE.Vector3((20 * Math.sin(0.1 * Math.PI)*2), 10,(10  * Math.cos(0.1 * Math.PI)*2)))
    const [ scene ] = useState(new THREE.Scene())
    const [ _controls, setControls ] = useState();

    const handleResize = useCallback(() => {
        const {current : container} = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight
            
            renderer.setSize(scW, scH)
        }
    }, [renderer])

    useEffect(() => {
        const { current: container} = refContainer
        if(container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer= new THREE.WebGL1Renderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize( scW,scH )
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)
            
            // maple tree
            // const scale = scH * 0.000005 + 0.35
            // const camera = new THREE.OrthographicCamera(-scale,scale,scale,-scale,1,50)
            // change scale > + scale const
            const scale = scH * 0.000005 + 4.5
            const camera = new THREE.OrthographicCamera(-scale,scale,scale,-scale,1,50)
            

            camera.position.copy(initialCameraPosition)
            
            camera.lookAt(target)

            const light = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(light)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            loadGLTFModel(scene, "images/Diglett.glb", {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
              //  window.addEventListener('dblclick',rotate,false)
                setLoading(false)
            })

            let req = null
            let frame = 0
            
            // const rotate =() => {
            //     let frame = 0
            //     let req = null

            //     req = requestAnimationFrame(rotate)
            //     console.log(req,frame)

            //     frame = frame <= 100 ? frame + 5 : frame
            //     if(frame <= 100 ){
            //         console.log(req,frame)

            //     const p = initialCameraPosition 
            //         const rotationSpeed = -easeOutCirc(frame / 120) * Math.PI * 10 
            //         camera.position.y = 10
            //         camera.position.x =-1*( p.x * Math.cos(rotationSpeed) + p.z * Math.sin(rotationSpeed)) 
            //         camera.position.z =-1*( p.z * Math.cos(rotationSpeed) - p.x * Math.sin(rotationSpeed))
            //         camera.lookAt(target)                 } else {
            //             controls.update()
            //         }

            // }
           
            const animate = () => {
                req = requestAnimationFrame(animate)
                frame = frame <= 100 ? frame + 1 : frame
                if(frame <= 100 ){
                    console.log(req,frame)
                    const p = initialCameraPosition
                    const rotationSpeed = -easeOutCirc(frame / 120) * Math.PI * 10 
                    camera.position.y = 10
                    camera.position.x =-1*( p.x * Math.cos(rotationSpeed) + p.z * Math.sin(rotationSpeed)) 
                    camera.position.z =-1*( p.z * Math.cos(rotationSpeed) - p.x * Math.sin(rotationSpeed))
                    camera.lookAt(target)                 } else {
                    controls.update()
                }
                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize, false)
        return ()=> {
            window.removeEventListener('resize', handleResize, false)
        }
    }, [renderer, handleResize])
    return (
        <ModelContainer ref={refContainer}>{loading && <LoadingSpinner />}</ModelContainer>
    )
}

export default ThreeDModel