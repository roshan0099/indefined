import img from '../../assets/img/sk-turning.gif'
import '../Display/display_style.css'
function Display(){
    const styles = {
        backgroundColor : ""
    }

    return(
        <>
        
        <div className='flex justify-around mt-24 w-full'>
            <div className='flex w-3/4 gap-3 flex-col md:flex-row'>
                <div className='max-h-80 md:flex-1 border border-green-600 p-6 rounded-3xl'>Lorem ipsum, dolor sit a
                met consectetur adipisicing elit. Aliquam deleniti vel modi. Quaerat
                 non nam fuga! Cum accusantium repellendus incidunt provident. 
                 Laudantium qui unde similique ut consequuntur quas, animi perspiciatis.</div>
                <div className='h-80 md:flex-1 border border-green-600 rounded-3xl'></div>

            </div>
        </div>
        <br />
        </>
    )
}


export default Display