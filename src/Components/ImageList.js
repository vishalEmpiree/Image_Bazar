

const ImageList = ({ images }) => {
    // console.log(images[0])


    return (
        <div>
            {
                images &&
                images.map((value, index) => {
                    //  console.log(value.alt_description)
                    return (
                        <div key={index} style={{border:"2px solid red"}} >
                            <img  src={value.urls.small} alt={value.alt_description} />
                            {/* <h3>{value.alt_description}</h3> */}
                        </div>
                    )
                }
                )
            }
        </div>
    )

}

export default ImageList;