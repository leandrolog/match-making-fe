import './match.css'
import {Button} from 'react-bootstrap';
import CardBox from "../../components/card/CardBox";


function Match() {

    return (
        <div className="content">
            <Button
                className="match-button"
                >Criar
            </Button>
            <div className="match-content">
                <h1>Match page</h1>
            </div>
            <CardBox/>
        </div>
    )

}

export default Match
