import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import kalahari2 from '../images/kalahari2.jpg';
// import kalahari3 from '../images/kalahari3.jpg';
import IMAGES from '../images/index.js';
import axios from 'axios';

// class FeaturedFive extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       img: IMAGES.kalahari2,
//       hovered: false
//     };
//     console.log(props.country)
//   }

//   render() {
//       return(
//         <div>
//         {this.props.country}
//         <img className='featuredFivePhoto' src={this.state.img} 
//           onMouseEnter={() => {
//             this.setState({
//               img: IMAGES.kalahari3, 
//               hovered: true
//             })
//           }} 
//           onMouseOut={() => {
//             this.setState({
//               img: IMAGES.kalahari2, 
//               hovered: false
//             })
//           }}
//           style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`
//         }} alt={""}></img>
//         </div>
//       );
//     }
//   }
function getFirstPhotos(photos) {
  for (let i = 0, firstPhotos = []; i < photos.length; i++) {
    if (photos[i].charAt(photos[i].length - 1) === '2') {
      firstPhotos.push(photos[i])
    }
    var first = firstPhotos
  }
  return first
};

function FeaturedFive(props) {
  let { id } = useParams();
  let [img1, setIMG1] = useState('');
  let [photos, setPhotos] = useState([]);
  let [hovered, setHovered] = useState(false);
  let [firstPhotos, setFirstPhotos] = useState([]);
  
  
  useEffect(() => {
    axios.get(`http://localhost:3000/countries/${id}/photos`)
    .then(res => {
      let photos = res.data;
      setPhotos(photos);
      let filepath1 = photos[0].split('.').reduce((o,i)=> o[i], IMAGES)
      setIMG1(filepath1);
      setFirstPhotos(getFirstPhotos(photos));
    })
  }, []);

  return(
    <div>
    {/* <img className='featuredFivePhoto' src={img1} 
      onMouseEnter={() => {
        setIMG1(photos[1].split('.').reduce((o,i)=> o[i], IMAGES)); 
        setHovered(true);
      }} 
      onMouseOut={() => {
        setIMG1(photos[0].split('.').reduce((o,i)=> o[i], IMAGES)); 
        setHovered(false);
      }}
      style={{transform: `${hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`
    }} alt={""}></img> */}
    </div>
  );
}

export default FeaturedFive;