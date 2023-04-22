import React from 'react';

function Footerchat() {
  return (
    <footer>
        <div className="container text-center">
          <p>&copy; Chatty 2020.</p>
          <div className="py-5 mx-3">
            Login in as: <strong className="text-info">{this.state.user.email}</strong>

          </div>
        </div>
    </footer>
  )
}

export default Footerchat;