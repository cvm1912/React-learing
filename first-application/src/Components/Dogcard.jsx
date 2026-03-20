import Image from '../Components/Image'
const Dogcard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <Image pic={props.img}/>
  </div>
  )
}

export default Dogcard
