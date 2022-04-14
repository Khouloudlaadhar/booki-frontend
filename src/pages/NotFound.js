import React from 'react'
import notFound from '../images/logo-notfound.png'
function NotFound() {
  return (
    <div>
    <img src={notFound} alt="not-found-page" className="not-found-page-image my-5" />
    <h1 className="text-center text-danger">Page not found</h1>
</div>
  )
}

export default NotFound