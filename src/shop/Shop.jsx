import React from 'react'
import PageHeader from '../components/PageHeader'

const Shop = () => {
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="shop"/>

      {/*  Shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
                left
                </div>
                <div className='col-lg-4 col-12'>
                right
                </div>
      </div>
        </div>
        </div>
    </div>
  )
}

export default Shop
