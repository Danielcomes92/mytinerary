import Slide from './Slide'
import Flickity from "react-flickity-component";


function Slider() {
    const flickityOptions = {
        initialIndex: 1,
        pageDots: true,
        wrapAround: true,
        autoPlay: true,
        adaptiveHeight: true
    }
    const citybases = [
        [
            {id: '1', country: 'Brazil', place: 'Buzios Beach', image: 'buzios.jpg'},
            {id: '2', country: 'France', place: 'Eiffel Tower', image: 'eiffel.jpg'},
            {id: '3', country: 'Italy', place: 'Fontana Di Trevi', image: 'fontana.jpg'},
            {id: '4', country: 'Germany', place: 'Coln', image: 'coln.jpg'}
        ],
        [
            {id: '5', country: 'Greece', place: 'Mykonos', image: 'greece.jpg'},
            {id: '6', country: 'United Kingdom', place: 'London Eye', image: 'london.jpg'},
            {id: '7', country: 'Maldives', place: 'Lily Beach', image: 'maldives.jpg'},
            {id: '8', country: 'Morocco', place: 'Chefchaouen', image: 'morocco.jpg'}
        ],
        [
            {id: '9', country: 'Germany', place: 'Neushwastein Castle', image: 'neush.jpg'},
            {id: '10', country: 'Canada', place: 'Niagara Falls', image: 'niagara.jpg'},
            {id: '11', country: 'Jordan', place: 'Petra', image: 'petra.jpg'},
            {id: '12', country: 'Croatia', place: 'Hvar', image: 'hvar.jpg'}
        ]
    ]
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
            >
                {
                citybases.map((cities, index) => {
                    return <Slide key={index} cities={cities} />
                })
                }
        </Flickity>
    );
}

export default Slider;