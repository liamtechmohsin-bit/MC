const Banner = ({text}) => {
  return (
    <div className='page-banner'>
      <div className='page-banner-pattern'></div>
      <h1 className="page-banner-title">{text}</h1>
    </div>
  )
}

export default Banner
