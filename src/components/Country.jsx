import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IntroContainer from './IntroContainer';
import Experiences from './Experiences';
import Top5 from './Top5';
import CountryName from './CountryName';
import PageJump from './PageJump';
// import IMAGES from '../images/index.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Country() {
  let { id } = useParams();
  let [country, setCountry] = useState({});
  // let [image, setImage] = useState('')
  const [showModal, setShowModal] = useState(false);
  let [experiences, setExperiences] = useState();
  let [top5, setTop5] = useState();
  let [newExperience, setNewExperience] = useState({name: ''})
  let [newPost, setNewPost] = useState({body: ''})
  
  
  useEffect(() => {
    const fetchCountry = async () => {
      const country = await axios.get(`http://localhost:3000/countries/${id}`)
        setCountry(country.data)
        // let name = country.data.name.toLowerCase().replace(/\s/g, "");
        // let img = name + 'top5llama'
        // setImage(img.split(' ').reduce((o,i)=> o[i], IMAGES)) ;
      };
      
    const fetchExperiences =  () => {
      axios.get(`http://localhost:3000/countries/${id}/experiences`)
      .then((response) => {
        const experiences = response.data
        setExperiences(experiences);
        setTop5(experiences.slice(0, 5));
      })
    };

    fetchCountry();
    fetchExperiences();
  }, [id]);



  const experienceInputsHandler = (e) =>{
      setNewExperience( {[e.target.name]: e.target.value} )
  }

  const postInputsHandler = (e) =>{
    setNewPost( {[e.target.name]: e.target.value} )
}

  const addExperience = () => {
    let params = {
      country_id: country.id,
      name: newExperience.name,
    };
    axios.post(`http://localhost:3000/experiences`, params)
    .then((response) => {
      addPost(response.data.id);
      setShowModal(false);
    })
  }

  const addPost = (id) => {
    let params = {
      experience_id: id,
      is_system: true,
      body: newPost.body,
    };
    axios.post(`http://localhost:3000/posts`, params)
    .then((response) => {
      console.log(response);
    })
  }
  
  
  return(
    <div>
      <CountryName name={country.name} bannerImage={country.banner_name}/>
      <PageJump />
      <IntroContainer introMessage={country.intro}/>
      <div id="top-5">
        <h2 className="hidden">TraveLlama Featured 5</h2>
        {/* <img className="llama-banner" src={image} /> */}
      </div>
      <div className="section-container">
        <h3 className="text-center">Experiences</h3>
        {top5 && <Top5 top5={top5}/>}
      </div>
      {experiences && <Experiences experiences={experiences} country={country.id}/> }
      <div>
        <Button onClick={() => setShowModal(true)}>Add Experience </Button>
        <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Add A New Experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formAddExperience">
                <Form.Label>Experience Name</Form.Label>
                <input type="text" placeholder="Enter Experience Name" name="name" value={newExperience.name} onChange={experienceInputsHandler}  />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="formAddPost">
                <Form.Label>Post</Form.Label>
                <input type="text" placeholder="Describe Experience" name="body" value={newPost.body} onChange={postInputsHandler}  />
              </Form.Group>
            </Form>
            <Button value="submit" type="submit" onClick={addExperience}>Save Experience</Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Country;