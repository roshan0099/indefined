import img from '../../assets/img/sk-turning.gif'
import '../Display/display_style.css'
function Display({trigger}){
    const styles = {
        backgroundColor : ""
    }

    return(
        <>
        
        <div className='flex justify-around mt-20 md:mt-28 w-full'>
            <div className='flex w-3/4 gap-3 flex-col md:flex-row'>
                <div className='min-h-80 md:flex-1 p-6 mt-5'>
                    <div className='text-5xl'><b>Define your <br />Creative vision with us !</b></div>    
                    <div className='mt-6 md:pr-32'>In today's digital landscape, establishing a strong online presence 
                        is crucial yet challenging. We specialize in simplifying this journey for 
                        you. 🚶‍♂️ </div>
                </div>
                <div className='h-80 md:flex-1 flex text-white relative overflow-hidden '><div className={`add-text-stroke ${trigger ? 'opacity-0' : 'opacity-1 transition-all duration-1000'} `}>&gt;</div></div>

            </div>
        </div>
        <br />
        </>
    )
}


export default Display