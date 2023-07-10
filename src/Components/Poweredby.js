import '../Styles/Poweredby.css';
import fb from '../Img/fb.png';
import insta from '../Img/insta.png';
import linkedin from '../Img/linkedin.png';
import twitter from '../Img/twitter.png';

const Poweredby = () => {
    return (
        <div className='company'>
            <div className='powered-by-stampa'>
                <div>
                    <span className='powered-by'>Powered by:</span>
                    <span className='stampa-solutions'>Stampa Solutions</span>
                </div>
                <div className='stampa-icons'>
                    <a href='https://www.facebook.com/stampasolutions/' target="_blank"><img src={fb} alt='fb' /></a>
                    <a href='https://www.instagram.com/solutionsstampallc/?igshid=MzRlODBiNWFlZA%3D%3D' target="_blank"><img src={insta} alt='insta' /></a>
                    <a href='https://twitter.com/SolutionsStampa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank"><img src={twitter} alt='twitter' /></a>
                    <a href='https://www.linkedin.com/company/stampa-solutions-llc/?originalSubdomain=pk' target="_blank"><img src={linkedin} alt='linkedin' /></a>
                </div>
            </div>
        </div>
    )
}

export default Poweredby