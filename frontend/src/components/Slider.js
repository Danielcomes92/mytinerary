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

    let citybaseDesktop = [
        [
            {id: '1', city: 'Buzios', place: 'Buzios Beach', image: 'buzios.jpg'},
            {id: '2', city: 'Paris', place: 'Eiffel Tower', image: 'eiffel.jpg'},
            {id: '3', city: 'Rome', place: 'Fontana Di Trevi', image: 'fontana.jpg'},
            {id: '4', city: 'Coln', place: 'Old Town', image: 'coln.jpg'}
        ],
        [
            {id: '5', city: 'Mykonos', place: 'Mykonos', image: 'greece.jpg'},
            {id: '6', city: 'London', place: 'London Eye', image: 'london.jpg'},
            {id: '7', city: 'Dhangethi', place: 'Lily Beach', image: 'maldives.jpg'},
            {id: '8', city: 'Chefchaouen', place: 'The Blue City', image: 'morocco.jpg'}
        ],
        [
            {id: '9', city: 'Munich', place: 'Neushwastein Castle', image: 'neush.jpg'},
            {id: '10', city: 'Ontario', place: 'Niagara Falls', image: 'niagara.jpg'},
            {id: '11', city: 'Petra', place: 'The City Of Petra', image: 'petra.jpg'},
            {id: '12', city: 'Hvar', place: 'Hvar Islands', image: 'hvar.jpg'}
        ]
    ]

    let citybaseMobile = [
        [
            {id: '1', city: 'Buzios', place: 'Buzios Beach', image: 'buzios.jpg'},
            {id: '2', city: 'Paris', place: 'Eiffel Tower', image: 'eiffel.jpg'}
        ],
        [
            {id: '3', city: 'Rome', place: 'Fontana Di Trevi', image: 'fontana.jpg'},
            {id: '4', city: 'Coln', place: 'Old Town', image: 'coln.jpg'}
        ],
        [
            {id: '5', city: 'Mykonos', place: 'Mykonos', image: 'greece.jpg'},
            {id: '6', city: 'London', place: 'London Eye', image: 'london.jpg'}
        ],
        [
            {id: '7', city: 'Dhangethi', place: 'Lily Beach', image: 'maldives.jpg'},
            {id: '8', city: 'Chefchaouen', place: 'The Blue City', image: 'morocco.jpg'}
        ],
        [
            {id: '9', city: 'Munich', place: 'Neushwastein Castle', image: 'neush.jpg'},
            {id: '10', city: 'Ontario', place: 'Niagara Falls', image: 'niagara.jpg'}
        ],
        [
            {id: '11', city: 'Petra', place: 'The City Of Petra', image: 'petra.jpg'},
            {id: '12', city: 'Hvar', place: 'Hvar Islands', image: 'hvar.jpg'}
        ]
    ]

    let database = window.innerWidth <= 768 ? citybaseMobile : citybaseDesktop

    return (
        <Flickity
            className={'carousel'} 
            elementType={'div'} 
            options={flickityOptions} 
            disableImagesLoaded={false}
            reloadOnUpdate
            static
            >
                {
                database.map((cities, index) => {
                    return <Slide key={index} cities={cities} />
                })
                }
        </Flickity>
    );
}

export default Slider;