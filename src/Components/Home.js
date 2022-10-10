import React from 'react'
import phone from '../iphonexdesign.webp';
import cart from '../CL-Lhc30lu8CEAE=.webp';

const Home = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
  <div className='me-3'>
    <img src={cart}  style={{height:'50px',width:'50px'}}/>
  </div>
</nav>
   <div className='container'>
      <h1>Home Page</h1>
        <div className='row text-center'>
          <div className='col-4 cartWrapper'>
            <img src={phone} className='img-fluid' style={{height:'200px',width:'250px'}}></img>
            <div>
              <span>
                I-Phone
              </span>
              <span>
                Price:$1000
              </span>
            </div>
            <div>
              <button type='button' className='btn btn-success'>Add To Cart</button>
            </div>
          </div>
          <div className='col-4 cartWrapper'>
            <img src={phone} className='img-fluid' style={{height:'200px',width:'250px'}}></img>
            <div>
              <span>
                I-Phone
              </span>
              <span>
                Price:$1000
              </span>
            </div>
            <div>
              <button type='button' className='btn btn-success'>Add To Cart</button>
            </div>
          </div>
          <div className='col-4 cartWrapper'>
            <img src={phone} className='img-fluid' style={{height:'200px',width:'250px'}}></img>
            <div>
              <span>
                I-Phone
              </span>
              <span>
                Price:$1000
              </span>
            </div>
            <div>
              <button type='button' className='btn btn-success'>Add To Cart</button>
            </div>
          </div>
        </div>
        </div>
   </>
  )
}

export default Home
