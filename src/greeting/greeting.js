import "./style.css"
const Greeting = ()=>{
    let time = new Date();
    time = time.getHours();
    let ctime = '';
    let cssStyle = {};
    if(time >=1 && time < 12){
        ctime = "Good Morning"
        cssStyle.color = 'green'
    }else if(time >= 12 && time<19){
        ctime = "Good Afternoon"
        cssStyle.color = 'orange'
    }else{
        ctime = "Good Night";
        cssStyle.color = 'black'
    }
    return(
        <>
        <div>
        <h1>Hello sir, <span style={cssStyle}>{ctime}</span> </h1>
        </div>
        
        </>
    )
}
export default Greeting;