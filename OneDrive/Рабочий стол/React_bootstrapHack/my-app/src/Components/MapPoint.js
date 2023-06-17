import point from '../pictures/MapPoint.png'

export default function MapPoint(props) {
    return (
            <div>
                <img id='MapPoint' src={point} width='40' height="50" onClick={props.onClick}/>
                
            </div> 
                
            
    )
    
}