import React from 'react'
import { brandImg, imgArr } from './imgUrl'
import { offerImg } from './imgUrl';
import Timer from './Timer';



function BodyMain() {
  return (
    <div className='col'>
    <Timer/>
      <img className='col-12 mt-4'
        src='https://www.bandhanbank.com/sites/default/files/2021-04/Bandhan_Myntra_Offer_Banner_02.jpg'
        // src='https://www.bing.com/images/search?view=detailV2&ccid=93GRpkR0&id=1D72B236C7BD4A8481BB184CED294211FD2B590E&thid=OIP.93GRpkR0U54idPWJOJxPrgAAAA&mediaurl=https%3a%2f%2fi.pinimg.com%2f474x%2f0b%2f46%2fce%2f0b46ceb1581581d7ca5069c7120d269b.jpg&exph=237&expw=474&q=Myntra+Banner+2023&simid=607988338200886476&FORM=IRPRST&ck=C522142045D3E66C6B8AEADF384663FB&selectedIndex=52&ajaxhist=0&ajaxserp=0'
        height={'350px'} alt='banner' />

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'150px'} alt='banner' />

      <div className='col-12 p-2'>
        {imgArr.map(val => {
          {/* console.log(val) */}
          return <img src={val.img} className='col-2' alt='shradda' />
        })}
      </div>

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
        height={'100px'} alt='banner' />

      <div className='col-12 p-2'>
        {offerImg.map(val => {
          {/* console.log(val) */}
          return <img src={val.img} className='col-2' alt='shradda' />
        })}
      </div>


      

      <img className='col-11 mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/3e80c999-94aa-4b59-befb-e49a33c474991646993148082-Most-Loved-Brands.jpg'
        height={'100px'} alt='banner' />


     {/* <div>
      <Link to='/products'><LazyLoadImage effect='blur' src={b3} width='100%' className='min-h-[320px]' alt='Banner_Image' /><br /></Link>
      <div className='h-[50px]'>
     </div> */}
      
      
      <div className='col-12 p-2 mb-3'>
        {brandImg.map(val => {
          {/* console.log(val) */}
          return <img src={val.img} className='col-2' alt='shradda' />
        })}
      </div>

    </div>
  )
}

export default BodyMain