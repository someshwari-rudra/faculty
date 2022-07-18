import React from 'react'

const Login = () => {
  return (
<section className="vh-100 login_Background" >
  <div className="container py-5 h-100 ">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-4">
        <div className="card shadow shadow-2-strong">
          <div className="card-body p-4 position-relative">
            <img className='position-absolute rounded-circle profile h-50' src="Images/profile.png" alt="profile card"/>
            <h3 className="mb-5 text-center text-white">a</h3>
            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" placeholder='Username' className="form-control shadow-sm form-control-lg fs-5" />
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" placeholder='Passowrd' className="form-control shadow-sm form-control-lg fs-5" />
            </div>
            <div className="form-check d-flex justify-content-between mb-4">
                <div>
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                </div>
                <label htmlFor="forgot Password">Forgot Password</label>
            </div>
            <button className="btn btn-primary btn-lg btn-block w-100" type="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login