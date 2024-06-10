import React from 'react';
import '../component/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <>
      <body style={{ backgroundColor: '#E7F9FF' }}>
        <div className="global-container">
          <div className="rounded-4 card login-form rounded" style={{ height: 'auto', backgroundColor: '#006E92' }}>
            <div className="card-body">
              <h1 className="card-title text-center" style={{ color: 'white' }}>
                Producify
              </h1>
            </div>

            <div className="card-text">
              <form>
                <div className="mb-3">
                  <label for="inputUsername" className="form-label">
                    Email/Username
                  </label>
                  <input type="username" className="form-control" id="inputUsername" placeholder="Enter your email/username..." />
                </div>
                <div className="mb-3">
                  <label for="inputPassword" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Enter your password..." />
                </div>
              </form>
            </div>
            <div className="mx-auto mt-3">
              <a href='/Todo' type="sign up" className="btn btn-primary" style={{ height: '40px', width: '200px' }}>
                Log in
              </a>
            </div>
            <br />
            <div className="d-flex align-items-center">
              <hr className="hr-light flex-grow-1" />
              <p className="mx-3" style={{ color: 'white', fontSize: '20px' }}>
                Or
              </p>
              <hr className="hr-light flex-grow-1" />
            </div>

            <div className="d-grid gap-3 col-6 mx-auto" style={{ marginTop: '10px' }}>
              <button type="google" className="btn btn-light">
                <img src="icon/google.png" alt="Google logo" className="rounded float-start" />
                <a style={{ fontWeight: '600', fontSize: '20px' }}>Sign in with Google</a>
              </button>
              <button type="facebook" className="btn btn-light">
                <img src="icon/facebook.png" alt="Facebook logo" className="rounded float-start" />
                <a style={{ fontWeight: '600', fontSize: '20px' }}>Sign in with Facebook</a>
              </button>
              <button type="apple" className="btn btn-light">
                <img src="icon/apple.png" alt="Apple ID logo" className="rounded float-start" />
                <a style={{ fontWeight: '600', fontSize: '20px' }}>Sign in with Apple ID</a>
              </button>
            </div>

            <hr className="hr-light" style={{ marginTop: '40px' }} />

            <br />

            <div className="signinhere" style={{ fontSize: '20px', color: 'white', textAlign: 'center', marginTop: '10px' }}>
              <p style={{ display: 'inline-block' }}>Don't have an account?</p>
              <nav style={{ color: 'white', display: 'inline-block' }} className="breadcrumb">
                <a href="/Register">Sign up here!</a>
              </nav>
            </div>
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
      </body>
    </>
  );
}
