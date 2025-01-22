import zdj from './assets/zdj.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={zdj} alt="zdjecie"></img>
            <h2 className="card-title">zadanie 2</h2>
            <p className="card-text">zadanie 2 w trakcie wykonywania</p>
        </div>
    );
}
export default Card