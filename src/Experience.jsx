import { Text, Html, ContactShadows, PresentationControls,  Float,  Environment, useGLTF } from '@react-three/drei'

export default function Experience()
{

    const computer = useGLTF("./model/cyberpunk_laptop_concept_design.glb")
    



    return <>

        <Environment background files={[
            "./environment/px.png",
            "./environment/nx.png",
            "./environment/py.png",
            "./environment/ny.png",
            "./environment/pz.png",
            "./environment/nz.png",

        ]} />

        {/* <color args={["#241a1a"]} attach="background"></color> */}

        
       <PresentationControls 
        global 
        rotation={[0.13, 0.1, 0]} 
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{mass:2, tension: 400}}
        snap={{mass:4, tension: 400}}
       >
        <Float rotationIntensity={0.4}>
             <rectAreaLight
             width={2.5}
             height={1.65}
             intensity={65}
             color={"#ffffff"}
             rotation={[0.1, Math.PI, 0]}
             position={[0, 0.55, -1.15]}


            />   
        <primitive object={computer.scene} position={[0, -1, -1]} scale={0.015} >
            <Html   distanceFactor={1.17} 
                    transform 
                    wrapperClass="htmlScreen"
                    position={[0, 50, -8.4]}
                    rotation-x={-0.356}
                    scale={75}
                    
                    
                    
                    >
                <iframe src='https://www.jorgegdev.com/' />
            </Html>
        </primitive>
        <Text 
            font='./AtAero-SuperItalic.woff' 
            fontSize={0.8} position={[3, 1, 0.75]} 
            rotation-y={-1.25} 
            maxWidth={2} 
            textAlign='center'
            color={"#A6F702"}
        >Jorge Guerrero
        </Text>
        <Text 
            font='./AtAero-SuperItalic.woff' 
            fontSize={0.5} position={[3, -1, 0.75]} 
            rotation-y={-1.25} 
            maxWidth={2} 
            textAlign='center'
            color={"#F55604"}
        >Web Developer 3D
        </Text>
        </Float>
       </PresentationControls>

       <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />

    </>
}