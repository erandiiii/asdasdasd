import ReactCurvedText from 'react-curved-text';
import { FaArrowRight } from 'react-icons/fa';
import './CurvedTxt.scss'
import { IoLogoMedium } from 'react-icons/io5';



const CurvedTxt = () => {
    return (
        <svg width={300} height={300} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <ReactCurvedText
                width={300}
                height={300}
                cx={150}
                cy={150}
                rx={100}
                ry={100}
                startOffset={0}
                reversed={false}
                text="-Instagram-Agency-Modeling-Modelkos"
                textProps={{ style: { fontSize: 38 } }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
                
            />
            <IoLogoMedium 
                x={120}
                y={120}
                height={150}
                width={120}
                fontSize={65}
               
            />
           

        </svg>




    );
};

export default CurvedTxt;