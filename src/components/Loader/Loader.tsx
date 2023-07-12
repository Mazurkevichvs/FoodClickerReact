import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader: React.FC = () => (
  <ContentLoader 
  className="offer__cafe"
    speed={2}
    width={350}
    height={380}
    viewBox="0 0 350 380"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="2" y="1" rx="0" ry="0" width="350" height="241" /> 
    <rect x="-1" y="267" rx="15" ry="15" width="209" height="25" /> 
    <rect x="1" y="305" rx="15" ry="15" width="339" height="14" /> 
    <rect x="0" y="328" rx="15" ry="15" width="339" height="14" /> 
    <rect x="3" y="350" rx="15" ry="15" width="339" height="14" />
  </ContentLoader>
)

export default MyLoader

