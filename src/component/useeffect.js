import react,{useEffct,setState} from 'react'
export default function Use()
{
    const[count,setcount]=setState(0)
    useEffect(()=>{
document.title = `count ${count}`

    })
    return(
<div>
<button onClick={()=>{setcount(count+1)}}>click me</button>
</div>

    )
}
