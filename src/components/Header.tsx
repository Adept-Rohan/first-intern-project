import  { FunctionComponent , useState  } from 'react';
import {AiFillPhone , AiOutlineShoppingCart , AiOutlineSearch} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {card} from '../tailwindvariant/Tailwindvariant'
import {useSelector} from 'react-redux'
import {removeDetail} from '../redux/UserReducer'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import List from './List';

type UserProps ={
  user : any;
}

const Header: FunctionComponent = () => {
  
  const {link} = card()
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const data  = useSelector<UserProps>((user) => user.user.user)
  console.log(data)

  const [menu , setMenu] = useState(false)

  const [inputText , setInputText] = useState("")

  const handleInput = (e:any) =>{
      let lowerCase = e.target.value.toLowerCase()
      setInputText(lowerCase)
  }

  console.log(inputText)

  const logOut = () =>{
    setMenu(!menu)
    localStorage.clear()
    navigate('/login')
    dispatch(removeDetail(null))

  }

  return (
    <>
    <div className='flex items-center justify-between bg-green-700 px-5 gap-2 '>
            <div className='flex items-center gap-2'>
            <AiFillPhone/>
            <h1>+977 9862307330</h1>
            </div>
            <div>
                <h1>Get 50% Off on a Selected Products.</h1>
            </div>
        </div>
     <div className='flex items-center justify-between py-2 px-8 border-b-gray-700 shadow-xl'>
      <div>
    <Link to='/'><img src='src/img/logo.svg' alt="" /></Link>    
      </div>
      <div className='flex items-center gap-8'>
     <Link to='/'><p>Home</p></Link>   
      <Link to='/category'><p>Category</p></Link>  
      </div>
      <div className='relative'>
        <AiOutlineSearch className = 'absolute top-2 left-2' />
        <input onChange={handleInput} className='h-[35px] rounded-2xl px-8 border-[2px] focus:outline-blue-300 ' type="search" placeholder='Search Products' />
         <List input={inputText} />
      </div>
      <div className='flex items-center gap-8'>
        <div className='relative flex items-center gap-2'>
            <BsPeople/>
           <button onClick={()=> setMenu(!menu)} >{data? <div>{data.email}</div> : <div>Register</div>   }</button>

            {
                menu ? <div className='z-50 w-40 h-18 p-3 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12  right-5'>
             <Link to='/signin'><p onClick={()=> setMenu(!menu)} className={link()} >Sign In</p></Link>   
             <Link to='/register'><p onClick={()=> setMenu(!menu)} className={link()} >Register</p>
             {
                data? <p onClick={logOut} className={link()} >Log Out</p> : null
             }
             </Link>  </div>    : null
            }

           
        </div>
        <div className='flex items-center gap-2'>
            <AiOutlineShoppingCart/>
       <Link to='/cart'><h1>Cart</h1></Link>  
        </div>
      </div>

    </div>
    </>
   
  );
};

export default Header;
